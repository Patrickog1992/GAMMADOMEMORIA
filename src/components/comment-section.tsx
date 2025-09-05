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
        avatar: "https://i.imgur.com/QfJtgio.jpg",
        comment: "Incrível! O Gamma do Memória realmente funcionou para mim. Minha capacidade de lembrar das coisas melhorou drasticamente em poucas semanas. Estou muito feliz!",
        likes: 127,
        hearts: 98,
    },
    {
        id: 2,
        name: "Maria Oliveira",
        avatar: "https://i.imgur.com/Sza1ZfT.png",
        comment: "Eu estava cética no começo, mas dei uma chance. Melhor decisão da minha vida! O Gamma do Memória é revolucionário. Recomendo a todos!",
        likes: 215,
        hearts: 150,
    },
    {
        id: 3,
        name: "Carlos Pereira",
        avatar: "https://i.imgur.com/om1IUWv.jpg",
        comment: "Finalmente algo que entrega o que promete. Consegui passar na minha prova de certificação graças à melhora na minha memória. Obrigado, equipe Gamma!",
        likes: 88,
        hearts: 62,
    },
    {
        id: 4,
        name: "Ana Costa",
        avatar: "https://i.imgur.com/oOLHMGS.jpg",
        comment: "Estou impressionada com os resultados. O Gamma do Memoria deu certo e estou muito feliz. É como se minha mente tivesse sido destravada!",
        likes: 302,
        hearts: 250,
    },
    {
        id: 5,
        name: "Rafael Martins",
        avatar: "https://i.imgur.com/iGAged5.png",
        comment: "Funciona mesmo! Tinha dificuldade para lembrar de nomes e datas, agora parece que tenho uma memória fotográfica. Sensacional!",
        likes: 178,
        hearts: 133,
    },
    {
        id: 6,
        name: "Beatriz Almeida",
        avatar: "https://picsum.photos/id/242/48/48",
        comment: "Minha produtividade no trabalho aumentou muito! Consigo focar e lembrar de tudo que preciso. O Gamma do Memória mudou minha rotina para melhor.",
        likes: 241,
        hearts: 199,
    },
];

export default function CommentSection() {
  return (
    <section className="w-full max-w-2xl mt-20">
      <h2 className="text-4xl font-bold text-center mb-10">
        Veja os comentários
      </h2>
      <div className="flex flex-col gap-6">
        {comments.map((comment) => (
          <CommentCard key={comment.id} {...comment} />
        ))}
      </div>
    </section>
  );
}
