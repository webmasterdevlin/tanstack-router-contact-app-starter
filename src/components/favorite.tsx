import { FormEvent } from 'react';
import { Contact } from '../models.ts';
import { updateContact } from '../services/contacts.ts';

type FavoriteProps = {
  contact: Contact;
};

const Favorite = ({ contact }: FavoriteProps) => {
  let favorite = contact.favorite;

  return (
    <form
      onSubmit={async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await updateContact(contact.id, {
          ...contact,
          favorite: !contact.favorite,
        });
      }}
    >
      <button
        name="favorite"
        value={favorite ? 'false' : 'true'}
        aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        {favorite ? '★' : '☆'}
      </button>
    </form>
  );
};

export default Favorite;
