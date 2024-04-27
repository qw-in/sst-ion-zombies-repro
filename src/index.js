import { Hono } from "hono";
import { handle } from "hono/aws-lambda";

const app = new Hono();

app.get("*", (c) => {
	return c.text("okk");
});

export const handler = handle(app);
