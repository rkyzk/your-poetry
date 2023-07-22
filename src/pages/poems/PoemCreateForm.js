import React, { useState } from "react";
import { useHistory } from "react-router";
import styles from "../../styles/PoemCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import { Form, Button, Alert } from "react-bootstrap";
import { toast } from "react-toastify";
import { useRedirect } from "../../hooks/useRedirect";

function PoemCreateForm() {
  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});
  const [poemData, setPoemData] = useState({
    title: "",
    content: "",
    category: "other",
  });
  const { title, content, category } = poemData;
  const [publish, setPublish] = useState(false);
  const history = useHistory();

  const handleChange = (event) => {
    setPoemData({
      ...poemData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    var msg = "Your poem has been saved";
    if (publish) {
      formData.append("published", true);
      msg = "Your poem has been published";
    }

    formData.append("title", title);
    formData.append("content", content);
    formData.append("category", category);
    publish && (formData.append("published", true));

    try {
      const { data } = await axiosReq.post('/poems/', formData)
      toast(msg);
      history.push(`/poems/${data.id}`);
    } catch (err){
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
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
            <Form.Group controlId="title">
            <Alert variant="warning" key={idx}>		
                {message}		
            </Alert>	
            </Form.Group>	
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
        <Button 
          className={`${btnStyles.Button} ${btnStyles.Olive} mt-2`}
          type="submit"
        >
          Save as Draft
        </Button>
        <Button
          className={`${btnStyles.Button} ${btnStyles.Olive} ml-2 mt-2`}
          onClick={()=>{setPublish(true)}} 
          type="submit"
        >
          Publish
        </Button>
        <Button
          className={`${btnStyles.Button} ${btnStyles.Olive} ml-2 mt-2`}
          onClick={() => history.goBack()}
        >
          Cancel
        </Button>
      </Form>
    </>
  );
}

export default PoemCreateForm;