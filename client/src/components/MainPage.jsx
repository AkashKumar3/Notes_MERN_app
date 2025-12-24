import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Navbar from "./Navbar"
import { useEffect, useState } from "react"
import axios from "axios"


export default function MainPage() {

    const [notes, setNotes] = useState([]);
    { console.log(notes) }

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const response = await axios.get(
                    "http://127.0.0.1:8000/api/notes"
                )
                console.log(response)
                setNotes(response.data)
            } catch (error) {
                console.error("Error fetching notes:", error)
            }
        }
        fetchNotes();
    }, [])
    const handleDelete = (id) => {
        console.log("Delete note:", id)
    }
    const [user, setUser] = useState('DEV');
    return (
        <>
            <main className="container mx-auto max-w-4xl py-10 space-y-6">
                {/* Header */}
                <h1 className="text-4xl font-light text-center text-muted-foreground">
                    Welcome Back{" "}
                    <span className="font-normal text-foreground">
                        {user}
                    </span>
                    ..
                </h1>

                {/* Create Button */}
                <Button>Create New Note</Button>

                {/* Notes Accordion */}
                <Accordion type="single" collapsible className="space-y-2">
                    {notes.map((note) => (
                        <AccordionItem
                            key={note._id}
                            value={note._id}
                            className="border rounded-md px-4"
                        >
                            {/* Header Row */}
                            <div className="flex items-center justify-between py-2">
                                <AccordionTrigger className="text-left hover:no-underline">
                                    {note.title}
                                </AccordionTrigger>

                                <div className="space-x-2">
                                    <Button size="sm" variant="secondary">
                                        Edit
                                    </Button>

                                    <Button
                                        size="sm"
                                        variant="primary"
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            handleDelete(note.id)
                                        }}
                                    >
                                        Delete
                                    </Button>
                                </div>
                            </div>

                            {/* Collapsible Content */}
                            {note.content && (
                                <AccordionContent className="space-y-3 pb-8">
                                    <Badge variant="success">
                                        Category - {note.category}
                                    </Badge>

                                    <p className="text-sm text-muted-foreground">
                                        {note.content}
                                    </p>

                                    <p className="text-xs text-muted-foreground">
                                        {note.createdAt}
                                    </p>
                                </AccordionContent>
                            )}
                        </AccordionItem>
                    ))}
                </Accordion>
            </main>
        </>
    )
}
