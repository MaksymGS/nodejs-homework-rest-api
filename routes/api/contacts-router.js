// const express = require('express')
import express from "express";

import * as contactsService from "../../models/contacts.js";

const contactsRouter = express.Router();

contactsRouter.get("/", async (req, res) => {
  const result = await contactsService.listContacts();
  res.json(result);
});

contactsRouter.get("/:contactId", async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await contactsService.getContactById(contactId);
  res.json(contact);
});

contactsRouter.post("/", async (req, res, next) => {
  const { name, email, phone } = req.body;
  const newContact = await contactsService.addContact(name, email, phone);
  res.json(newContact);
});

contactsRouter.delete("/:contactId", async (req, res, next) => {
  const { contactId } = req.params;
  const removedContact = await contactsService.removeContact(contactId);
  res.json(removedContact);
});

contactsRouter.put("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

export default contactsRouter;
