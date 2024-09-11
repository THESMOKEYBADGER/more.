import React, { useState } from 'react';
import { Avatar, Text, Group, Modal } from '@mantine/core';
import { Dropzone, MIME_TYPES } from '@mantine/dropzone';
import styles from '../../styles/ManageCompanies.module.css';

const CompanyList = ({ companies, onUpdateLogo }) => {
  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleAvatarClick = (company) => {
    setSelectedCompany(company);
  };

  const handleCloseModal = () => {
    setSelectedCompany(null);
  };

  const handleDrop = async (files) => {
    if (selectedCompany && files.length > 0) {
      await onUpdateLogo(selectedCompany.id, files[0]);
      handleCloseModal();
    }
  };

  return (
    <div className={styles.companyList}>
      <h2>Companies</h2>
      {companies.map((company) => (
        <div key={company.id} className={styles.companyItem}>
          <Group>
            <Avatar
              src={company.logoUrl}
              size="md"
              radius="xl"
              alt={`${company.name} logo`}
              onClick={() => handleAvatarClick(company)}
              style={{ cursor: 'pointer' }}
            >
              {company.name.charAt(0)}
            </Avatar>
            <Text>{company.name}</Text>
          </Group>
        </div>
      ))}

      <Modal opened={!!selectedCompany} onClose={handleCloseModal} title="Update Company Logo">
        <Dropzone
          onDrop={handleDrop}
          accept={[MIME_TYPES.png, MIME_TYPES.jpeg, MIME_TYPES.svg]}
          maxSize={5 * 1024 * 1024}
        >
          <Text align="center">Drag images here or click to select files</Text>
          <Text align="center" size="sm" color="dimmed" mt={5}>
            Allowed file types: PNG, JPEG, SVG. Max file size: 5MB
          </Text>
        </Dropzone>
      </Modal>
    </div>
  );
};

export default CompanyList;