import { FormEvent } from 'react';
import { createContact } from '../services/contacts.ts';

type Props = {
  query: string;
  setQuery: (query: string) => void;
};

export default function SidebarSearchContact() {
  const handleOnChangeEvent = async (e: FormEvent<HTMLInputElement>) => {};

  const action = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createContact();
  };

  return (
    <div>
      <form id="search-form" role="search">
        <input
          id="q"
          aria-label="Search contacts"
          placeholder="Search"
          type="search"
          name="q"
          onChange={handleOnChangeEvent}
        />
        <div id="search-spinner" hidden={true} aria-hidden />
        <div className="sr-only" aria-live="polite"></div>
      </form>
      <form onSubmit={action}>
        <button type="submit">New</button>
      </form>
    </div>
  );
}
