import CommentCard from "./comment-card";

export type Comment = {
  id: number;
  name: string;
  avatar: string;
  comment: string;
  likes: number;
  hearts: number;
};

const comments: Comment[] = [
    {
        id: 1,
        name: "João Silva",
        avatar: "https://picsum.photos/id/237/48/48",
        comment: "Incrível! O Gamma do Memória realmente funcionou para mim. Minha capacidade de lembrar das coisas melhorou drasticamente em poucas semanas. Estou muito feliz!",
        likes: 127,
        hearts: 98,
    },
    {
        id: 2,
        name: "Maria Oliveira",
        avatar: "https://picsum.photos/id/238/48/48",
        comment: "Eu estava cética no começo, mas dei uma chance. Melhor decisão da minha vida! O Gamma do Memória é revolucionário. Recomendo a todos!",
        likes: 215,
        hearts: 150,
    },
    {
        id: 3,
        name: "Carlos Pereira",
        avatar: "https://picsum.photos/id/239/48/48",
        comment: "Finalmente algo que entrega o que promete. Consegui passar na minha prova de certificação graças à melhora na minha memória. Obrigado, equipe Gamma!",
        likes: 88,
        hearts: 62,
    },
    {
        id: 4,
        name: "Ana Costa",
        avatar: "https://picsum.photos/id/240/48/48",
        comment: "Estou impressionada com os resultados. O Gamma do Memoria deu certo e estou muito feliz. É como se minha mente tivesse sido destravada!",
        likes: 302,
        hearts: 250,
    },
];

export default function CommentSection() {
  return (
    <section className="w-full max-w-5xl mt-20">
      <h2 className="text-4xl font-bold text-center mb-10">
        O que nossos clientes felizes dizem
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {comments.map((comment) => (
          <CommentCard key={comment.id} {...comment} />
        ))}
      </div>
    </section>
  );
}
