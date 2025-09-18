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
        comment: "Incrível! O Protocolo LotoLógica realmente funcionou para mim. Acertei 14 pontos na lotofácil na primeira semana. Estou muito feliz!",
        likes: 127,
        hearts: 98,
    },
    {
        id: 2,
        name: "Maria Oliveira",
        avatar: "https://i.imgur.com/Sza1ZfT.png",
        comment: "Eu estava cética no começo, mas dei uma chance. Melhor decisão da minha vida! O Protocolo LotoLógica é revolucionário. Recomendo a todos!",
        likes: 215,
        hearts: 150,
    },
    {
        id: 3,
        name: "Carlos Pereira",
        avatar: "https://i.imgur.com/om1IUWv.jpg",
        comment: "Finalmente algo que entrega o que promete. Consegui ganhar múltiplos prêmios menores seguindo o método. Obrigado, equipe LotoLógica!",
        likes: 88,
        hearts: 62,
    },
    {
        id: 4,
        name: "Ana Costa",
        avatar: "https://i.imgur.com/oOLHMGS.jpg",
        comment: "Estou impressionada com os resultados. O Protocolo LotoLógica deu certo e estou muito feliz. É como se minha sorte tivesse sido destravada!",
        likes: 302,
        hearts: 250,
    },
    {
        id: 5,
        name: "Rafael Martins",
        avatar: "https://i.imgur.com/iGAged5.png",
        comment: "Funciona mesmo! Tinha dificuldade para escolher os números, agora parece que tenho um guia. Sensacional!",
        likes: 178,
        hearts: 133,
    },
    {
        id: 6,
        name: "Beatriz Almeida",
        avatar: "https://i.imgur.com/s69P41y.jpg",
        comment: "Minha confiança para apostar aumentou muito! Consigo seguir uma estratégia clara. O Protocolo LotoLógica mudou meu jeito de jogar.",
        likes: 241,
        hearts: 199,
    },
];

export default function CommentSection() {
  return (
    <section className="w-full max-w-2xl mt-20">
      <h2 className="text-4xl font-bold text-center mb-10 text-foreground">
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
