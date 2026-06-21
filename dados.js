// ============================================================
// DADOS DA LIVRARIA - EDITE AQUI!
// ============================================================

// CONFIGURAÇÃO DO WHATSAPP DO VENDEDOR
const CONFIG = {
    whatsappPadrao: "5511999999999",  // ALTERE PARA SEU NÚMERO!
    nomeLoja: "Livraria Online",
    moeda: "R$"
};

// LOGIN DO ADMIN (ALTERE A SENHA!)
const ADMIN_CREDENTIALS = {
    username: "admin",
    password: "admin123"  // MUDE ESTA SENHA!
};

// PRODUTOS - ADICIONE, EDITE OU REMOVA AQUI
const PRODUTOS = [
    {
        id: 1,
        nome: "O Poder da Ação",
        descricao: "Um guia completo para transformar seus sonhos em realidade através de ações concretas e estratégias práticas.",
        categoria: "Autoajuda",
        preco: 29.90,
        precoPromo: 19.90,
        imagem: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop",
        tipo: "PDF",
        pdfUrl: "https://exemplo.com/livro1.pdf",  // URL DO SEU PDF NO R2/DRIVE
        destaque: true
    },
    {
        id: 2,
        nome: "JavaScript Moderno",
        descricao: "Aprenda JavaScript ES6+ com exemplos práticos e projetos reais. Do básico ao avançado.",
        categoria: "Tecnologia",
        preco: 49.90,
        precoPromo: null,
        imagem: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
        tipo: "PDF",
        pdfUrl: "https://exemplo.com/livro2.pdf",
        destaque: true
    },
    {
        id: 3,
        nome: "Caneta Executiva Premium",
        descricao: "Caneta de alta qualidade com acabamento em metal. Ideal para presentear ou uso profissional.",
        categoria: "Produtos",
        preco: 35.00,
        precoPromo: null,
        imagem: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=400&h=300&fit=crop",
        tipo: "FISICO",
        estoque: 15,
        destaque: false
    },
    {
        id: 4,
        nome: "Mindset Empreendedor",
        descricao: "Desenvolva a mentalidade necessária para criar e escalar negócios de sucesso.",
        categoria: "Negócios",
        preco: 39.90,
        precoPromo: 24.90,
        imagem: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop",
        tipo: "PDF",
        pdfUrl: "https://exemplo.com/livro4.pdf",
        destaque: false
    },
    {
        id: 5,
        nome: "Caderno Artesanal A5",
        descricao: "Caderno com capa de couro sintético, 200 folhas pautadas. Perfeito para anotações e estudos.",
        categoria: "Produtos",
        preco: 45.00,
        precoPromo: null,
        imagem: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&h=300&fit=crop",
        tipo: "FISICO",
        estoque: 8,
        destaque: false
    },
    {
        id: 6,
        nome: "Fé e Propósito",
        descricao: "Uma jornada espiritual para encontrar significado e direção na vida através da fé.",
        categoria: "Religião",
        preco: 25.00,
        precoPromo: null,
        imagem: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=400&h=300&fit=crop",
        tipo: "PDF",
        pdfUrl: "https://exemplo.com/livro6.pdf",
        destaque: false
    }
];

// CÓDIGOS DE ACESSO (admin gera novos aqui)
// Formato: { codigo: "LIVRO-XXXX-XXXX", telefone: "5511...", produtoId: 1, usado: false }
let CODIGOS = JSON.parse(localStorage.getItem('liv_codigos') || '[]');

// HISTÓRICO DE DOWNLOADS
let HISTORICO = JSON.parse(localStorage.getItem('liv_historico') || '[]');

// ============================================================
// FUNÇÕES DE PERSISTÊNCIA
// ============================================================
function salvarCodigos() {
    localStorage.setItem('liv_codigos', JSON.stringify(CODIGOS));
}

function salvarHistorico() {
    localStorage.setItem('liv_historico', JSON.stringify(HISTORICO));
}

function gerarCodigoUnico() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let codigo = 'LIVRO-';
    for (let i = 0; i < 4; i++) codigo += chars[Math.floor(Math.random() * chars.length)];
    codigo += '-';
    for (let i = 0; i < 4; i++) codigo += chars[Math.floor(Math.random() * chars.length)];
    return codigo;
}
