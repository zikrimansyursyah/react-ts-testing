import { render, screen } from "@testing-library/react";
import App from "../App";

describe("User", () => {
    test("renders hello", async () => {
        render(<App />);
        expect(screen.getByTestId('name')).toBeInTheDocument();
        // const textElement = screen.getByText(/Hello/i);
        // expect(textElement).toBeInTheDocument();
    });

    // test("renders a list of users", async () => {
    //     render(<App />);
    //     const users = await screen.findAllByRole("listitem");
    //     expect(users).toHaveLength(2);
    // });
});
