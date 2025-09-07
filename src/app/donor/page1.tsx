'use client';

import { useEffect, useState } from 'react';
import { Container, Table, Spinner } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { fetchSadqaMemberData } from "@/app/Services/SadqaService/apiService";

interface SadqaMember {
  memberId: number;
  firstName: string;
  lastName: string;
  fatherName: string;
  mobileNumber: string;
  addedBy?: string | null;
  addedByName?: string | null;
}


export default function SadqaMembersPage() {
  const [data, setData] = useState<SadqaMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const members = await fetchSadqaMemberData();
      setData(members);
      setIsLoading(false);
    };
    getData();
  }, []);

  return (
    <Container className="my-5">
      <h2 className="text-center text-success fw-bold mb-4">Sadqa Members</h2>
      {isLoading ? (
        <div className="text-center">
          <Spinner animation="border" variant="success" />
        </div>
      ) : (
        <Table striped bordered hover responsive className="shadow">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Father's Name</th>
              <th>Mobile</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center">No members found</td>
              </tr>
            ) : (
              data.map((member, index) => (
                <tr key={member.memberId}>
                  <td>{index + 1}</td>
                  <td>{member.firstName}</td>
                  <td>{member.lastName}</td>
                  <td>{member.fatherName}</td>
                  <td>
                    <FaPhoneAlt className="me-1 text-success" /> {member.mobileNumber}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      )}
    </Container>
  );
}
