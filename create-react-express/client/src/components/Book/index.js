import React from "react";
import "./style.css";
import {Row, Col} from "../Grid";

function Book({ title, authors, description, link, image }) {
    return (
        <div>
            <Row>
                <Col size="9">
                    <h3>{title}</h3>
                </Col>
                <Col size="3">
                    <button className="btn btn-light" target="_blank" href={link}>
                        View
                    </button>
                </Col>
            </Row>
            <Row>
                <Col size="12">
                    Written by {authors}
                </Col>
            </Row>
            <Row>
                <Col size="3">
                    <img className="img-thumbnail img-fluid" src={image} alt={title}/>
                </Col>
                <Col size="9">
                    <p>{description}</p>
                </Col>
            </Row>
        </div>
    )
}

export default Book;