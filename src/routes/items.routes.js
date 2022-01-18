const { Router } = require("express");
const {
  renderTableItem,
  addItem,
  renderEditItem,
  EditItem,
  deleteItem,
  renderCategoriaPC,
  anyItemSearch,
} = require("../controllers/items.controllers");
const router = Router();

//All items
router.get("/items", renderTableItem);

//Add
router.post("/items/add", addItem);

//Edit
router.get("/items/:id/edit", renderEditItem);

router.put("/items/:id/edit", EditItem);

//Delete
router.delete("/items/:id/delete", deleteItem);
//View

//Queries

//Categories

router.get("/items/search/computo", renderCategoriaPC);

// Search any item

router.post("/items/search/param", anyItemSearch);

module.exports = router;
