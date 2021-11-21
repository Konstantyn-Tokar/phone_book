import s from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/action";
import { getFilterContacts } from "../../helpers/filter";
import ListGroup from "react-bootstrap/ListGroup";
// import Container from "react-bootstrap/Container";

import { BsTrash } from "react-icons/bs";

export default function ContactList() {
  const contacts = useSelector(({ contacts: { items, filter } }) =>
    getFilterContacts(items, filter)
  );

  const dispatch = useDispatch();

  return (
    // <Container className="p-2">
    <ListGroup as="ul" variant="flush">
      {contacts.map(({ id, name, number }) => (
        <ListGroup.Item as="li" className={s.item} key={id}>
          <div>
            <p className={s.text}>
              Name: <span className={s.text_d}>{name}</span>
            </p>
            <p className={s.text}>
              Number: <span className={s.text_d}>{number}</span>
            </p>
          </div>
          <button
            type="button"
            id={id}
            className={s.button}
            onClick={() => dispatch(deleteContact(id))}
          >
            <BsTrash />
          </button>
        </ListGroup.Item>
      ))}
    </ListGroup>
    // </Container>
  );
}
