import { json } from '@sveltejs/kit';

export const GET = async () => {
  return json({ hello: "Getworld", random: Math.random() });
}

export const POST = async () => {
  return json({ hello: "Postworld", random: Math.random() });
}

export const PUT = async () => {
    return json({ hello: "PUTworld", random: Math.random() });
  }
