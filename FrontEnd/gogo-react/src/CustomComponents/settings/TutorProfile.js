import React, { useState, useEffect } from 'react';
import { Card, Row, Input, Button, Form, Col } from 'reactstrap';
import { FiUpload } from 'react-icons/fi';

import NotificationManager from '../../components/common/react-notifications/NotificationManager';
import axiosInstance from '../../helpers/axiosInstance';

const TutorProfile = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    if (error) {
      console.log(error);
      NotificationManager.warning(
        error,
        'User Profile Details',
        3000,
        null,
        null,
        ''
      );
      setError(null);
    }
  }, [error]);

  useEffect(() => {
    if (success) {
      NotificationManager.success(
        success,
        'User Profile Details',
        3000,
        null,
        null,
        ''
      );
      setSuccess(null);
    }
  }, [success]);

  const [userProfile, setUserProfile] = useState({
    customer_profile_picture: '',
    customer_subdomain_name: '',
    customer_institute_name: '',
    customer_about_me: '',
    customer_career_summary: '',
    customer_role: '',
    customer_linkedin_url: '',
    customer_occupation: '',
    customer_facebook_url: '',
    customer_website_url: '',
    customer_twitter_url: '',
  });

  const [displayProfileImage, setDisplayProfileImage] = useState(null);

  const handleUserProfileChange = (e) => {
    const { name, value } = e.target;
    setUserProfile((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUserProfileSubmit = async (e) => {
    e.preventDefault();
    const values = userProfile;
    console.log(values);
    try {
      const formData = new FormData();
      formData.append('profile_picture', userProfile.customer_profile_picture);
      formData.append('values', JSON.stringify(values));
      const result = await axiosInstance.put('/users', formData);

      if (result.data.success) {
        setUserProfile(result.data.user);
        setSuccess('Profile Updated Scuuessfully');
      } else {
        if (result.data.error) setError(result.data.error);
        else setError('could not update details');
      }
    } catch (err) {
      console.log(err);
      try {
        setError(err.response.data.error);
      } catch (error) {
        setError('could not update details');
      }
    }
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const result = await axiosInstance.get('/user');
        console.log(result);
        if (result.data.success) setUserProfile(result.data.user);
        else {
          if (result.data.error) setError(result.data.error);
          else setError('could not fetch details');
        }
      } catch (err) {
        console.log(err);
        try {
          setError(err.response.data.error);
        } catch (error) {
          setError('could not fetch details');
        }
      }
    };
    getUser();
  }, []);

  return (
    <Row className="p-4" style={{ width: '100% !important' }}>
      <Form onSubmit={handleUserProfileSubmit}>
        <div className="mx-4">
          <Card body>
            <Row>
              <Col md={6} className="pl-4">
                <Row className="ml-1">
                  {' '}
                  <img
                    src={displayProfileImage}
                    style={{ width: '20%', marginLeft: '10px' }}
                  />
                  <label className="mr-auto ml-4">
                    <input
                      type="file"
                      name="customer_profile_picture"
                      accept=".jpg,.jpeg,.png"
                      onChange={(e) => {
                        console.log(e.target.files[0]);
                        const file = URL.createObjectURL(e.target.files[0]);
                        const currentImage = e.target.files[0];
                        if (
                          currentImage.type != 'image/jpg' &&
                          currentImage.type != 'image/jpeg' &&
                          currentImage.type != 'image/png'
                        )
                          setError('only jpg,jpeg,png formats are allowed');
                        else {
                          if (currentImage.size > 2048000)
                            setError('max image size limit is 2MB');
                          else {
                            setUserProfile((prevState) => ({
                              ...prevState,
                              ['customer_profile_picture']: currentImage,
                            }));
                            setDisplayProfileImage(file);
                          }
                        }
                      }}
                    />
                    <FiUpload
                      className="text-center "
                      style={{ marginLeft: '50px' }}
                    />
                    <p id="ufd">Upload from device</p>
                  </label>
                </Row>
                <label className="mt-4">SubDomain Name</label>
                <Input
                  type="text"
                  name="customer_subdomain_name"
                  value={userProfile.customer_subdomain_name}
                  onChange={handleUserProfileChange}
                  placeholder="Subdomain Name"
                />
              </Col>
              <Col md={6} className="pr-4">
                <label className="mt-4">Organization Name</label>
                <Input
                  type="text"
                  placeholder="Organization Name"
                  name="customer_institute_name"
                  value={userProfile.customer_institute_name}
                  onChange={handleUserProfileChange}
                />
                <label className="mt-4">About me</label>
                <Input
                  type="text"
                  name="customer_about_me"
                  onChange={handleUserProfileChange}
                  value={userProfile.customer_about_me}
                />
              </Col>
            </Row>
            <label className="mt-4 mx-1">Career Summary</label>
            <Input
              type="text"
              className="mr-2"
              name="customer_career_summary"
              value={userProfile.customer_career_summary}
              onChange={handleUserProfileChange}
            />
            <p className="mt-2">
              <b>Note:</b>&nbsp;Please add ',' to separte skills.
            </p>
            <Row>
              <Col md={6}>
                <label>Role</label>
                <Input type="text" value="Instructor" disabled />
                <label className="mt-4">Occupation</label>
                <Input
                  type="text"
                  placeholder="Occupation"
                  name="customer_occupation"
                  value={userProfile.customer_occupation}
                  onChange={handleUserProfileChange}
                />
                <label className="mt-4">Website</label>
                <Input
                  type="text"
                  placeholder="example: www.xyz.com"
                  name="customer_website_url"
                  value={userProfile.customer_website_url}
                  onChange={handleUserProfileChange}
                />
              </Col>
              <Col md={6}>
                <label className="">LinkedIn</label>
                <Input
                  type="text"
                  placeholder="Your LinkedIn Account URL"
                  name="customer_linkedin_url"
                  value={userProfile.customer_linkedin_url}
                  onChange={handleUserProfileChange}
                />
                <label className="mt-4">Facebook</label>
                <Input
                  type="text"
                  placeholder="Your Facebook Account URL"
                  name="customer_facebook_url"
                  value={userProfile.customer_facebook_url}
                  onChange={handleUserProfileChange}
                />
                <label className="mt-4">Twitter</label>
                <Input
                  type="text"
                  placeholder="Your Twitter Account URL"
                  name="customer_twitter_url"
                  value={userProfile.customer_twitter_url}
                  onChange={handleUserProfileChange}
                />
              </Col>
            </Row>
            <Row className="">
              <Button
                type="reset"
                className="ml-auto mt-4 mr-2"
                style={{ width: '100px', borderRadius: '0px' }}
              >
                Reset
              </Button>{' '}
              <Button
                type="submit"
                className="mr-auto mt-4 ml-2"
                style={{ width: '100px', borderRadius: '0px' }}
              >
                Submit
              </Button>
            </Row>
          </Card>
        </div>
      </Form>
    </Row>
  );
};

export default TutorProfile;
