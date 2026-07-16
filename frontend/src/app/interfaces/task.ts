export interface Task {
    id?: number;
    title: string;
    description: string | null;
    status: 'pendente' | 'em andamento' | 'concluída';
    category: string;
    edited_at: string;
}
