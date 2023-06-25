import { Form } from "../components/Form/Form";
import { Title } from '../components/Title/Title';
import { Contacts } from "../components/Contacts/Contacts";
import { Filter } from "../components/Filtter/Filter";


 const ContactsList = () => {
    return(
    <>
 <Title title='Phonebook'></Title>
      <Form/>
      <Title title="Contacts"></Title>
      <Filter/>
      <Contacts/>
        </>
        )
}
    export default ContactsList