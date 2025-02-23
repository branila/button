package main

import (
	"log"
	"net/http"
)

func main() {
	fs := http.FileServer(http.Dir("static"))

	http.Handle("/", http.StripPrefix("/", fs))

	http.HandleFunc("/stats", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "static/stats.html")
	})

	log.Println("Server in ascolto sulla porta 8080...")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
