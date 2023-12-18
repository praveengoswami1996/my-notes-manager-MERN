import api from "../../api";
import { useQuery } from "@tanstack/react-query";

const useFetchNotes = () => {
    const notes = useQuery({
        queryKey: ["notes"],
        queryFn: async () => {
            const response = await api.get("/notes");
            return response;
        }
    })

    return notes;
}

export default useFetchNotes;