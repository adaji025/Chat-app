import React, { useState } from "react";
import { Button, Modal, Nav, Tab } from "react-bootstrap";
import Contacts from "./Contacts";
import Conversations from "./Conversations";
import NewCoversationsModal from "./NewCoversationsModal";
import NewContactsModal from "./NewContactsModal";

const CONVERSATION_KEY = "conversations";
const CONTACT_KEY = "contacts";

const Sidebar = ({ id }) => {
  const [activeKey, setActiveKey] = useState(CONVERSATION_KEY);
  const [modalOpen, setModalOpen] = useState(false);
  const coversationOpen = activeKey === CONVERSATION_KEY;

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div style={{ width: "250px" }} className="d-flex flex-column">
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={CONVERSATION_KEY}>Conversations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACT_KEY}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="border-end overflow-auto flex-grow-1">
          <Tab.Pane eventKey={CONVERSATION_KEY}>
            <Conversations />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACT_KEY}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
        <div className="p-2 border-top small border-end">
          Your ID is <span className="text-muted">{id}</span>
        </div>
        <div className="">
          <Button
            className="w-100 rounded-0 fw-bold py-3"
            onClick={() => setModalOpen(true)}
          >
            New {coversationOpen ? "Conversation" : "Contacts"}
          </Button>
        </div>
      </Tab.Container>
      <Modal show={modalOpen} onHide={closeModal}>
        {coversationOpen ? (
          <NewCoversationsModal closeModal={closeModal} />
        ) : (
          <NewContactsModal closeModal={closeModal} />
        )}
      </Modal>
    </div>
  );
};

export default Sidebar;
