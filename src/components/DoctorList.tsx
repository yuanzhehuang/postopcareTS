import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Amplify, Storage } from 'aws-amplify';
import awsconfig from '../aws-exports'; // Adjust the path if necessary

Amplify.configure(awsconfig);

const Container = styled.div`
  font-family: Arial, sans-serif;
`;

const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const SearchInput = styled.input`
  width: 300px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const DoctorsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

const DoctorCard = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const DoctorImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 20px;
`;

const DoctorName = styled.a`
  font-size: 18px;
  color: #1a73e8;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const initialDoctors = [
  { name: 'Dr. Darren Tse', imageKey: 'image1.jpg' },
  { name: 'Dr. Danny Peters', imageKey: 'image2.jpg' },
  { name: 'Dr. Jillian Macdonald', imageKey: 'image3.jpg' },
  { name: 'Dr. Paul Beaulé', imageKey: 'image4.jpg' },
  { name: 'Dr. Corliss Best', imageKey: 'image5.jpg' },
  { name: 'Dr. Grayson Roumeliotis', imageKey: 'image6.jpg' },
  { name: 'Dr. Megan Lim', imageKey: 'image7.jpg' },
  { name: 'Dr. George Grammatopoulos', imageKey: 'image8.jpg' },
  { name: 'Dr. Geoffrey F. Dervin', imageKey: 'image9.jpg' },
  { name: 'Dr. Gihad Shabib', imageKey: 'image10.jpg' },
  { name: 'Dr. Simon Garceau', imageKey: 'image11.jpg' },
  { name: 'Dr. Humberto Vigi', imageKey: 'image12.jpg' }
];

const DoctorsList: React.FC = () => {
  const [doctors, setDoctors] = useState(initialDoctors);
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const urls = await Promise.all(
        doctors.map(async (doctor) => {
          try {
            const url = await Storage.get(doctor.imageKey);
            return url;
          } catch (error) {
            console.error('Error fetching image from S3', error);
            return '';
          }
        })
      );
      setImageUrls(urls);
    };

    fetchImages();
  }, [doctors]);

  return (
    <Container>
      <Header />
      <SearchBar>
        <SearchInput type="text" placeholder="Search" />
      </SearchBar>
      <DoctorsGrid>
        {doctors.map((doctor, index) => (
          <DoctorCard key={index}>
            <DoctorImage src={imageUrls[index]} alt={doctor.name} />
            <DoctorName href="#">{doctor.name}</DoctorName>
          </DoctorCard>
        ))}
      </DoctorsGrid>
      <Footer />
    </Container>
  );
};

export default DoctorsList;
