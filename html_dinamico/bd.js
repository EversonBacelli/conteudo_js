const personagens = [
    {
      codigo: "001",
      nome: "Hou Yi",
      descricao: "Atirador de longo alcance, excelente para rota inferior.",
      url_img: "https://example.com/img/hou_yi.jpg",
      classe: "Atirador",
      rota: "Inferior"
    },
    {
      codigo: "002",
      nome: "Lady Zhen",
      descricao: "Maga poderosa com alto dano em área.",
      url_img: "https://example.com/img/lady_zhen.jpg",
      classe: "Mago",
      rota: "Meio"
    } ,
    {
      "codigo": "003",
      "nome": "Angela",
      "descricao": "Especialista em magias explosivas e controle de grupo.",
      "url_img": "https://example.com/img/angela.jpg",
      "classe": "Mago",
      "rota": "Meio"
    },
    {
      "codigo": "004",
      "nome": "Alessio",
      "descricao": "Atirador ágil com grande mobilidade e dano crítico.",
      "url_img": "https://example.com/img/alessio.jpg",
      "classe": "Atirador",
      "rota": "Inferior"
    },
    {
      "codigo": "005",
      "nome": "Fang",
      "descricao": "Atirador versátil e ideal para iniciantes.",
      "url_img": "https://example.com/img/fang.jpg",
      "classe": "Atirador",
      "rota": "Inferior"
    },
    {
      "codigo": "006",
      "nome": "Luban No.7",
      "descricao": "Pequeno robô com alto dano e controle em área.",
      "url_img": "https://example.com/img/luban7.jpg",
      "classe": "Atirador",
      "rota": "Inferior"
    },
    {
      "codigo": "007",
      "nome": "Princesa Gélida",
      "descricao": "Maga com habilidades de congelamento e controle.",
      "url_img": "https://example.com/img/princesa_gelida.jpg",
      "classe": "Mago",
      "rota": "Meio"
    },
    {
      "codigo": "008",
      "nome": "Kongming",
      "descricao": "Mago estratégico com buffs e controle de grupo.",
      "url_img": "https://example.com/img/kongming.jpg",
      "classe": "Mago",
      "rota": "Meio"
    },
    {
      "codigo": "009",
      "nome": "Dun",
      "descricao": "Lutador durável, ideal para rota superior.",
      "url_img": "https://example.com/img/dun.jpg",
      "classe": "Lutador",
      "rota": "Superior"
    },
    {
      "codigo": "010",
      "nome": "Biron",
      "descricao": "Lutador forte com habilidades de avanço e atordoamento.",
      "url_img": "https://example.com/img/biron.jpg",
      "classe": "Lutador",
      "rota": "Superior"
    },
    {
      "codigo": "011",
      "nome": "Nezha",
      "descricao": "Herói veloz com ótimo potencial de iniciação.",
      "url_img": "https://example.com/img/nezha.jpg",
      "classe": "Lutador",
      "rota": "Superior"
    },
    {
      "codigo": "012",
      "nome": "Arthur",
      "descricao": "Cavaleiro resistente com habilidades de controle e dano.",
      "url_img": "https://example.com/img/arthur.jpg",
      "classe": "Lutador",
      "rota": "Superior"
    },
    {
      "codigo": "013",
      "nome": "Bai Qi",
      "descricao": "Tanque com grande presença em lutas e resistência.",
      "url_img": "https://example.com/img/bai_qi.jpg",
      "classe": "Tanque",
      "rota": "Superior"
    },
    {
      "codigo": "014",
      "nome": "Cao Cao",
      "descricao": "Lutador focado em regeneração e dano em área.",
      "url_img": "https://example.com/img/cao_cao.jpg",
      "classe": "Lutador",
      "rota": "Superior"
    },
    {
      "codigo": "015",
      "nome": "Guan Yu",
      "descricao": "Velocidade e dano massivo em cavalaria.",
      "url_img": "https://example.com/img/guan_yu.jpg",
      "classe": "Lutador",
      "rota": "Superior"
    },
    {
      "codigo": "016",
      "nome": "Kai",
      "descricao": "Lutador agressivo com ult devastadora.",
      "url_img": "https://example.com/img/kai.jpg",
      "classe": "Lutador",
      "rota": "Superior"
    },
    {
      "codigo": "017",
      "nome": "Li Xin",
      "descricao": "Versátil, com modos de defesa e ataque.",
      "url_img": "https://example.com/img/li_xin.jpg",
      "classe": "Lutador",
      "rota": "Superior"
    },
    {
      "codigo": "018",
      "nome": "Lu Bu",
      "descricao": "Lutador de alto dano com roubo de vida.",
      "url_img": "https://example.com/img/lu_bu.jpg",
      "classe": "Lutador",
      "rota": "Superior"
    },
    {
      "codigo": "019",
      "nome": "Mulan",
      "descricao": "Dois estilos de luta: curta e longa distância.",
      "url_img": "https://example.com/img/mulan.jpg",
      "classe": "Lutador",
      "rota": "Superior"
    },
    {
      "codigo": "020",
      "nome": "Sun Ce",
      "descricao": "Lutador naval com bom controle e resistência.",
      "url_img": "https://example.com/img/sun_ce.jpg",
      "classe": "Lutador",
      "rota": "Superior"
    },
    {
      "codigo": "021",
      "nome": "Xiang Yu",
      "descricao": "Tanque com controle de multidão poderoso.",
      "url_img": "https://example.com/img/xiang_yu.jpg",
      "classe": "Tanque",
      "rota": "Superior"
    },
    {
      "codigo": "022",
      "nome": "Musashi",
      "descricao": "Assassino veloz, ótimo para eliminar alvos frágeis.",
      "url_img": "https://example.com/img/musashi.jpg",
      "classe": "Assassino",
      "rota": "Caçador"
    },
    {
      "codigo": "023",
      "nome": "Príncipe de Lanling",
      "descricao": "Assassino furtivo e letal em ganks.",
      "url_img": "https://example.com/img/lanling.jpg",
      "classe": "Assassino",
      "rota": "Caçador"
    },
    {
      "codigo": "024",
      "nome": "Lam",
      "descricao": "Assassino preciso com potencial de emboscada.",
      "url_img": "https://example.com/img/lam.jpg",
      "classe": "Assassino",
      "rota": "Caçador"
    },
    {
      "codigo": "025",
      "nome": "Marco Polo",
      "descricao": "Atirador com mobilidade e ataques em área.",
      "url_img": "https://example.com/img/marco_polo.jpg",
      "classe": "Atirador",
      "rota": "Inferior"
    },
    {
      "codigo": "026",
      "nome": "Zhang Fei",
      "descricao": "Tanque protetor com transformações em combate.",
      "url_img": "https://example.com/img/zhang_fei.jpg",
      "classe": "Tanque",
      "rota": "Suporte"
    },
    {
      "codigo": "027",
      "nome": "Sun Bin",
      "descricao": "Suporte com buffs de velocidade e cura.",
      "url_img": "https://example.com/img/sun_bin.jpg",
      "classe": "Suporte",
      "rota": "Suporte"
    },
    {
      "codigo": "028",
      "nome": "Daji",
      "descricao": "Maga com alto burst e controle.",
      "url_img": "https://example.com/img/daji.jpg",
      "classe": "Mago",
      "rota": "Meio"
    },
    {
      "codigo": "029",
      "nome": "Zhou Yu",
      "descricao": "Mago com zonas de fogo que causam dano contínuo.",
      "url_img": "https://example.com/img/zhou_yu.jpg",
      "classe": "Mago",
      "rota": "Meio"
    },
    {
      "codigo": "030",
      "nome": "Liu Bang",
      "descricao": "Lutador defensivo com escudos para aliados.",
      "url_img": "https://example.com/img/liu_bang.jpg",
      "classe": "Lutador",
      "rota": "Superior"
    },
    {
      "codigo": "031",
      "nome": "Xiahou Dun",
      "descricao": "Lutador com boa iniciação e resistência.",
      "url_img": "https://example.com/img/xiahou_dun.jpg",
      "classe": "Lutador",
      "rota": "Superior"
    },
    {
      "codigo": "032",
      "nome": "Zhong Wuyan",
      "descricao": "Lutadora com alto dano explosivo e CC.",
      "url_img": "https://example.com/img/zhong_wuyan.jpg",
      "classe": "Lutador",
      "rota": "Superior"
    },
    {
      "codigo": "033",
      "nome": "Menki",
      "descricao": "Lutador com habilidades de empurrão e resistência.",
      "url_img": "https://example.com/img/menki.jpg",
      "classe": "Lutador",
      "rota": "Superior"
    },
    {
      "codigo": "034",
      "nome": "Lian Po",
      "descricao": "Tanque com ult poderosa e bom controle.",
      "url_img": "https://example.com/img/lian_po.jpg",
      "classe": "Tanque",
      "rota": "Superior"
    },
    {
      "codigo": "035",
      "nome": "Fuzi",
      "descricao": "Lutador habilidoso com foco em CC e zoneamento.",
      "url_img": "https://example.com/img/fuzi.jpg",
      "classe": "Lutador",
      "rota": "Superior"
    },
    {
      "codigo": "036",
      "nome": "Liu Bei",
      "descricao": "Lutador com combos rápidos e dano físico elevado.",
      "url_img": "https://example.com/img/liu_bei.jpg",
      "classe": "Lutador",
      "rota": "Superior"
    },
    {
      "codigo": "037",
      "nome": "Ying Zheng",
      "descricao": "Mago de longo alcance com dano massivo em área.",
      "url_img": "https://example.com/img/ying_zheng.jpg",
      "classe": "Mago",
      "rota": "Meio"
    },
    {
      "codigo": "038",
      "nome": "Diaochan",
      "descricao": "Maga com alta mobilidade e controle de inimigos.",
      "url_img": "https://example.com/img/diaochan.jpg",
      "classe": "Mago",
      "rota": "Meio"
    },
    {
      "codigo": "039",
      "nome": "Zhao Yun",
      "descricao": "Assassino/lutador híbrido com boa iniciação.",
      "url_img": "https://example.com/img/zhao_yun.jpg",
      "classe": "Assassino",
      "rota": "Caçador"
    },
    {
      "codigo": "040",
      "nome": "A Ke",
      "descricao": "Assassina silenciosa com alto dano crítico.",
      "url_img": "https://example.com/img/a_ke.jpg",
      "classe": "Assassino",
      "rota": "Caçador"
    },
    {
      "codigo": "041",
      "nome": "Gongsun Li",
      "descricao": "Atiradora com grande mobilidade e escape.",
      "url_img": "https://example.com/img/gongsun_li.jpg",
      "classe": "Atirador",
      "rota": "Inferior"
    },
    {
      "codigo": "042",
      "nome": "Huang Zhong",
      "descricao": "Atirador estático com altíssimo dano em torres.",
      "url_img": "https://example.com/img/huang_zhong.jpg",
      "classe": "Atirador",
      "rota": "Inferior"
    },
    {
      "codigo": "043",
      "nome": "Consort Yu",
      "descricao": "Atiradora com controle de grupo e dano mágico.",
      "url_img": "https://example.com/img/consort_yu.jpg",
      "classe": "Atirador",
      "rota": "Inferior"
    },
    {
      "codigo": "044",
      "nome": "Nao",
      "descricao": "Assassino ágil com grande potencial de snowball.",
      "url_img": "https://example.com/img/nao.jpg",
      "classe": "Assassino",
      "rota": "Caçador"
    },
    {
      "codigo": "045",
      "nome": "Mozi",
      "descricao": "Suporte/mago com escudos e áreas de controle.",
      "url_img": "https://example.com/img/mozi.jpg",
      "classe": "Suporte",
      "rota": "Suporte"
    },
    {
      "codigo": "046",
      "nome": "Dong Huang Taiyi",
      "descricao": "Suporte com ressurreição e controle.",
      "url_img": "https://example.com/img/dong_huang.jpg",
      "classe": "Suporte",
      "rota": "Suporte"
    },
    {
      "codigo": "047",
      "nome": "Yaria",
      "descricao": "Suporte encantador com cura e escudos.",
      "url_img": "https://example.com/img/yaria.jpg",
      "classe": "Suporte",
      "rota": "Suporte"
    },
    {
      "codigo": "048",
      "nome": "Ata",
      "descricao": "Tanque com controle de área marítima.",
      "url_img": "https://example.com/img/ata.jpg",
      "classe": "Tanque",
      "rota": "Superior"
    },
    {
      "codigo": "049",
      "nome": "Meng Tian",
      "descricao": "Tanque ofensivo que domina rota solo com lanças.",
      "url_img": "https://example.com/img/meng_tian.jpg",
      "classe": "Tanque",
      "rota": "Superior"
    },
    {
      "codigo": "050",
      "nome": "Han Xin",
      "descricao": "Assassino extremamente ágil e técnico.",
      "url_img": "https://example.com/img/han_xin.jpg",
      "classe": "Assassino",
      "rota": "Caçador"
    }
  ]
  
export {personagens}