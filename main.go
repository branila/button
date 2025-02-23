package main

import (
	"log"
	"net/http"
	"text/template"
)

var templates = template.Must(template.ParseGlob("static/*.html"))

func main() {
	fs := http.FileServer(http.Dir("static"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		templates.ExecuteTemplate(w, "index.html", nil)
	})

	http.HandleFunc("/rankings", func(w http.ResponseWriter, r *http.Request) {
		templates.ExecuteTemplate(w, "rankings.html", nil)
	})

	http.HandleFunc("/manifest", func(w http.ResponseWriter, r *http.Request) {
		templates.ExecuteTemplate(w, "manifest.html", nil)
	})

	log.Println("Server in ascolto sulla porta 8080...")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
