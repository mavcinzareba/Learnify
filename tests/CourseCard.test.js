import React from 'react';
import { render } from '@testing-library/react';
import CourseCard from '../components/CourseCard';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

describe('CourseCard Component', () => {
  const mockCourse = {
    id: '1',
    title: 'Test Course',
    description: 'This is a test course description',
    thumbnail: 'test.jpg'
  };

  it('renders course information correctly', () => {
    const { getByText, getByAltText } = render(
      <I18nextProvider i18n={i18n}>
        <CourseCard course={mockCourse} onSelect={() => {}} />
      </I18nextProvider>
    );
    
    expect(getByText('Test Course')).toBeInTheDocument();
    expect(getByText('This is a test course description')).toBeInTheDocument();
    expect(getByAltText('Test Course')).toBeInTheDocument();
  });

  it('renders translated button text', () => {
    const { getByText } = render(
      <I18nextProvider i18n={i18n}>
        <CourseCard course={mockCourse} onSelect={() => {}} />
      </I18nextProvider>
    );
    
    expect(getByText('Rozpocznij kurs')).toBeInTheDocument();
  });
});