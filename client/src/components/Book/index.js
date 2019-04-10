import React from "react";
import "./style.css";
import {Row, Col} from "../Grid";
import { ListItem } from "../List"

function Book({ title, authors, description, link, image, Button}) {
    return (
        <ListItem>
            <Row>
                <Col size="9">
                    <h3>{title}</h3>
                </Col>
                <Col size="3">
                    <div className="buttons">
                        <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={link}>
                            View
                        </a>
                        <Button />
                    </div>
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
        </ListItem>
    )
}

export default Book;