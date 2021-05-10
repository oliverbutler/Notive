package main

import (
	"time"

	"github.com/davecgh/go-spew/spew"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

type Block struct {
	ID uint `gorm:"primaryKey"`

	CreatedAt time.Time

	UpdatedAt time.Time

	DeletedAt gorm.DeletedAt `gorm:"index"`

	// Block Type
	Type string

	// Parent ID
	// Each Block has ONE Parent
	ParentID uint

	// Children Blocks
	// Each Block has MANY Children
	Children []Block `gorm:"foreignKey:ParentID"`
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

	// Create sub-sub-block
	subSubBlock := &Block{Type: "sub-sub-block", ParentID: subBlock.ID}
	db.Create(subSubBlock)

	// Create sub-block
	subBlock2 := &Block{Type: "text2", ParentID: block.ID}
	db.Create(subBlock2)

	// spew.Dump(getSubBlocks(1, db))

	spew.Dump(getBlockPath(3, db))
}

// Return all sub-blocks of a block given it's ID
func getSubBlocks(id uint, db *gorm.DB) Block {
	var block Block
	db.Preload("Children").First(&block, id)

	return block
}

// Get a block given it's ID
func getBlock(id uint, db *gorm.DB) Block {
	var block Block
	db.First(&block, id)

	return block
}

// Return all of the blocks to reach the root node
func getBlockPath(id uint, db *gorm.DB) []Block {
	// Store the path as we go
	var path []Block

	// Target so far
	target := id

	// Until the parent is 0 (root) keep going
	i := 0
	for i < 1 {
			// Get Target Block
			block := getBlock(target, db)
			path = append(path, block);

			if(block.ParentID == 0) {
				i++
			} else {
				target = block.ParentID
			}
	}

	// path = append(path, blo)
	return path
}

// // todo: Handle block create
// func createBlock() Block {

// }

// // todo: Handle block update
// func updateBlock() Block {
	
// }

// // todo: Handle block delete
// func deleteBlock() Block {

// }

// // todo: Handle block move
// func moveBlock(id uint, target uint) Block {

// }
