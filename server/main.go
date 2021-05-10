package main

import (
	"fmt"
	"time"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

type Block struct {
	ID uint `gorm:"primarykey"`

	CreatedAt time.Time

	UpdatedAt time.Time

	DeletedAt gorm.DeletedAt `gorm:"index"`

	// Block Type
	Type string

	// Parent ID
	ParentID uint

	// Parent Block
	Parent *Block `gorm:"foreignKey:ParentID"`

	// Children Blocks
	Children []Block

	// b1(page)
	// -> b2(text1)
	// -> b3(text2)
}

func printBlock(block Block) {
	fmt.Printf("Block: %v %v", block.ID, block.Type)
	fmt.Printf(" Parent: %v", block.ParentID)

	fmt.Println("")

}

func main() {
	db, err := gorm.Open(sqlite.Open("file::memory:?cache=shared"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	// Migrate the schema
	db.AutoMigrate(&Block{})

	block := &Block{Type: "page", ParentID: 0}
	db.Create(block)

	// Create sub-block
	subBlock := &Block{Type: "text1", ParentID: block.ID}
	db.Create(subBlock)

	// Create sub-block
	subBlock2 := &Block{Type: "text2", ParentID: block.ID}
	db.Create(subBlock2)

	var blocks []Block
	db.Preload("Parent").First(&blocks, 1)

	for _, block := range blocks {
		printBlock(block)
	}
}
