import React, { useState } from "react";
import { useHistory } from "react-router";
import styles from "../../styles/PoemCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import { Form, Button, Alert } from "react-bootstrap";
import { toast } from "react-toastify";
import { useRedirect } from "../../hooks/useRedirect";
import { useFeaturedProfilesData, useSetFeaturedProfilesData } from "../../contexts/FeaturedProfilesDataContext";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

/**
 * 
 * @returns 
 */
function PoemCreateForm() {
  // redirect logged out users to home page.
  useRedirect("loggedOut");
  // variables for storing error data
  const [errors, setErrors] = useState({});
  // variables for storing input made by users
  const [poemData, setPoemData] = useState({
    title: "",
    content: "",
    category: "other",
  });
  // destructure the poemdata object
  const { title, content, category } = poemData;
  // boolean to tell if user has clicked on 'publish'
  const [publish, setPublish] = useState(false);
  // instantiate history object to store data which url the user visits.
  const history = useHistory();
  // get setFeaturedProfileData
  const setFeaturedProfilesData = useSetFeaturedProfilesData();
  const currentUser = useCurrentUser();
  const user_id = currentUser?.pk

  /**
   *  Set user input into variables poemData.
   *  :arguments event
   */ 
  const handleChange = (event) => {
    setPoemData({
      ...poemData,
      [event.target.name]: event.target.value,
    });
  };
  
  /**
   *  Add poems count in featured profiles
   *  when a new poem has been written.
   */
  const handlePoemCount = () => {
    setFeaturedProfilesData((prevProfiles) => ({
      ...prevProfiles,
      results: prevProfiles.results.map((profile) => {
        return profile.id === user_id
          ? { ...profile, poems_count: profile.poems_count + 1, }
          : profile;
      }),
    }));
  };
  
  /**
   * Send poem data entered by users to the backend.
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    /* if 'publish' has been clicked, set published to true
       and set the feedback message accordingly */
    if (publish) {
      formData.append("published", true);
      var msg = "Your poem has been published";
    } else {
      var msg = "Your poem has been saved";
    }
    formData.append("title", title);
    formData.append("content", content);
    formData.append("category", category);

    try {
      // Send the api the data of a new poem
      const { data } = await axiosReq.post('/poems/', formData);
      /* Add 1 to poems count in the featured profile
         if the user is featured. */      
      handlePoemCount();
      // redirect users to the new poem's page.
      history.push(`/poems/${data.id}`);
      // display feedback message
      toast(msg);
    } catch (err){
      err.response?.status !== 401 && 
      setErrors(err.response?.data);
    }
  };

  return (
    <>
      <h2>Write a new poem</h2>
      <Form onSubmit={handleSubmit} className={styles.PoemForm}>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </Form.Group>
        {errors?.title?.map((message, idx) => (
          <Alert variant="warning" key={idx}>		
            {message}		
          </Alert>	
        ))}
        <Form.Group controlId="content">
          <Form.Label>Content</Form.Label>
          <Form.Control
            type="text"
            name="content"
            as="textarea"
            rows={10}
            value={content}
            onChange={handleChange}
          />
        </Form.Group>
        {errors?.content?.map((message, idx) => (
          <Alert variant="warning" key={idx}>		
            {message}		
          </Alert>
        ))}
        <Form.Group contorlId="category">
          <Form.Label className="my-1 mr-2">
            Category
          </Form.Label>
          <Form.Control
            as="select"
            className={`${styles.Category} ml-3`}
            id="category"
            name="category"
            value={category}
            onChange={handleChange}
            custom
          >
            <option>nature</option>
            <option>love</option>
            <option>people</option>
            <option>humor</option>
            <option>haiku</option>
            <option selected>other</option>
          </Form.Control>
        </Form.Group>
        {errors?.category?.map((message, idx) => (
         <Alert variant="warning" key={idx}>
           {message}
         </Alert>
       ))}
       {errors.non_field_errors?.map((message, idx) => (
            <Alert key={idx} variant="warning" className="mt-3">
              {message}
            </Alert>
          ))}
        <Button 
          className={`${btnStyles.Button} ${btnStyles.Olive} mt-2`}
          type="submit"
        >
          save as draft
        </Button>
        <Button
          className={`${btnStyles.Button} ${btnStyles.Olive} ml-2 mt-2`}
          onClick={()=>{setPublish(true)}} 
          type="submit"
        >
          publish
        </Button>
        <Button
          className={`${btnStyles.Button} ${btnStyles.Olive} ml-2 mt-2`}
          onClick={() => history.goBack()}
        >
          cancel
        </Button>
      </Form>
    </>
  );
}

export default PoemCreateForm;