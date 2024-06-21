export function getContact(id) {
  return fetch(`http://localhost:3000/data/${id}`);
}

export async function updateContact(updated, id) {
  const contactResponse = await getContact(id);
  const contact = await contactResponse.json();

  return fetch(`http://localhost:3000/data/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ ...contact, ...updated }),
  });
}
