package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

type User struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

func main() {
	// main app
	app := fiber.New()
	app.Use(cors.New())

	app.Post("/auth", func(c *fiber.Ctx) error {
		var user User
		// parse the user
		if err := c.BodyParser(&user); err != nil {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"error": "Cannot Parse the User Credentials",
			})
		}

		return c.JSON(fiber.Map{
			"username": user.Username,
			"password": user.Password,
		})
	})

	app.Listen(":3000")
}
