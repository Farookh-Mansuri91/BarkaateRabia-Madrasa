'use client';

import { useEffect, useState } from 'react';
import { Button, Modal, Form, Card, Container, Row, Col, InputGroup } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaEdit, FaPlus, FaSearch } from 'react-icons/fa';
import { fetchSadqaMemberData } from '@/app/Services/SadqaService/apiService';

interface Member {
    memberId?: number;
    firstName: string;
    lastName: string;
    fatherName: string;
    mobileNumber: string;
}

export default function SadqaMembers() {
    const [members, setMembers] = useState<Member[]>([]);
    const [filteredMembers, setFilteredMembers] = useState<Member[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [editingMember, setEditingMember] = useState<Member | null>(null);

    useEffect(() => {
        fetchMembers();
    }, []);

    const fetchMembers = async () => {
        try {
            const response = await fetchSadqaMemberData();
            console.log(response);
            setMembers(response);
            setFilteredMembers(response);
        } catch (error) {
            console.error('Error fetching members:', error);
        }
    };

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        if (!query) {
            setFilteredMembers(members);
        } else {
            setFilteredMembers(
                members.filter(member =>
                    member.firstName.toLowerCase().includes(query.toLowerCase()) ||
                    member.lastName.toLowerCase().includes(query.toLowerCase())
                )
            );
        }
    };

    const handleSave = async () => {
        if (!editingMember) return;
        const url = editingMember.memberId
            ? '/api/updateSadqaMemberData'
            : '/api/addSadqaMemberData';
        const method = editingMember.memberId ? 'PUT' : 'POST';

        try {
            await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(editingMember),
            });
            setShowModal(false);
            fetchMembers();
        } catch (error) {
            console.error('Error saving member:', error);
        }
    };

    return (
        <Container>
            <div className="bg-light shadow-sm rounded p-3">
                <div className="row align-items-center gy-2">
                    {/* Title in a separate row on mobile */}
                    <div className="col-12 col-md-auto">
                        <h2 className="fw-bold text-primary text-center text-md-start">Sadqa Members</h2>
                    </div>

                    {/* Search Bar: Takes full width on small screens, half on larger */}
                    <div className="col-12 col-md flex-grow-1">
                        <InputGroup className="shadow-sm">
                            <InputGroup.Text className="bg-white border-0">
                                <FaSearch className="text-secondary" />
                            </InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Search members by name..."
                                value={searchQuery}
                                onChange={(e) => handleSearch(e.target.value)}
                                className="border-0 shadow-none"
                                style={{ borderRadius: "0 10px 10px 0" }}
                            />
                        </InputGroup>
                    </div>

                    {/* Add New Button: Stays right-aligned on larger screens, centered on small */}
                    <div className="col-12 col-md-auto text-center text-md-end">
                        <Button
                            className="d-flex align-items-center gap-2 btn-success shadow-sm px-4 py-2"
                            onClick={() => { setEditingMember({ firstName: '', lastName: '', fatherName: '', mobileNumber: '' }); setShowModal(true); }}
                            style={{ borderRadius: "10px" }}
                        >
                            <FaPlus size={18} /> <span className="fw-bold">Add New</span>
                        </Button>
                    </div>
                </div>
            </div>

            <Row>
                {filteredMembers.map((member) => (
                    <Col md={4} key={member.memberId}>
                        <motion.div whileHover={{ scale: 1.05 }}>
                            <Card className="shadow-lg p-3 mb-4 bg-white rounded">
                                <Card.Body>
                                    <Card.Title>{member.firstName} {member.lastName}</Card.Title>
                                    <Card.Text>Father: {member.fatherName}</Card.Text>
                                    <Card.Text>Phone: {member.mobileNumber}</Card.Text>
                                    <Button variant="warning" onClick={() => { setEditingMember(member); setShowModal(true); }}>
                                        <FaEdit /> Edit
                                    </Button>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>
                ))}
            </Row>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{editingMember?.memberId ? 'Edit Member' : 'Add Member'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={editingMember?.firstName || ''}
                                onChange={(e) => setEditingMember({ ...editingMember!, firstName: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={editingMember?.lastName || ''}
                                onChange={(e) => setEditingMember({ ...editingMember!, lastName: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Father Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={editingMember?.fatherName || ''}
                                onChange={(e) => setEditingMember({ ...editingMember!, fatherName: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control
                                type="text"
                                value={editingMember?.mobileNumber || ''}
                                onChange={(e) => setEditingMember({ ...editingMember!, mobileNumber: e.target.value })}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
                    <Button variant="primary" onClick={handleSave}>Save</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}
