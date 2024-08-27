import { Contact } from '../models.ts';

type Props = {
  contacts: Contact[];
};

export default function SidebarContactList({ contacts }: Props) {
  return (
    <nav>
      {contacts.length ? (
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <a href={`/contacts/${contact.id}`}>
                {contact.first || contact.last ? (
                  <>
                    {contact.first} {contact.last}
                  </>
                ) : (
                  <i>No Name</i>
                )}{' '}
                {contact.favorite && <span>★</span>}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>
          <i>No contacts</i>
        </p>
      )}
    </nav>
  );
}
