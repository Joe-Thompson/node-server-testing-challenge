exports.seed = async function(knex) {
    await knex("games").truncate();
    await knex("games").insert([
        { name: "MLB the Show", rating: 10 },
        { name: "Madden 20", rating: 8 },
        { name: "Spider-man", rating: 10 },
        { name: "Kingdom Come", rating: 4 }
    ])
};
