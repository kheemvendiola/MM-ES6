
let isStraight = (mappedrank) => {
    const allRankI = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    let startIndex = allRankI.indexOf(mappedrank[0]);
    return mappedrank.every((r, i) => r == allRankI[startIndex + i]);
}

let mapRank = (hand) => {
    return hand.map((v, i) => {
        var rank = v[1] + (v[2] != undefined ? v[2] : '');

        switch (rank) {
            case 'A':
                return rank[i] = 1;

            case 'J':
                return rank[i] = 11;

            case 'Q':
                return rank[i] = 12;

            case 'K':
                return rank[i] = 13;
        }

        return parseInt(rank);
    });
};

let distinct = (item) => {
    return item.filter((x, i, a) => a.indexOf(x) == i);
}

let determineRank = (x) => {
    const royal = [1, 10, 11, 12, 13];

    const suits = x.hand.map((v) => v[0]);
    const suit_type = distinct(suits);
    const suit_count = suit_type.length;

    const mappedRank = mapRank(x.hand);

    const rank_type = distinct(mappedRank);
    const rank_count = rank_type.length;
    const ranktype_count = rank_type.map((t) => { return mappedRank.filter(x => x == t).length });

    mappedRank.sort((a, b) => a - b);
    ranktype_count.sort((a, b) => b - a);

    suit_count;
    rank_count;
    suit_type;
    rank_type;
    ranktype_count;

    
    if (suit_count == 1) {//FLUSH

        //ROYAL
        if (mappedRank.includes(13)) {
            if (mappedRank.every((r, i) => r == royal[i])) return 'Royal Flush';
        }

        //ROYAL STRAIGHT
        if (isStraight(mappedRank)) return 'Straight Flush';
        return 'Flush';

    }
    else if (ranktype_count.includes(4)) { //FOUR OF A KIND
        return 'Four of a kind';

    }
    else if (ranktype_count.includes(3)) { //FULLHOUSE OR THREE OF A KIND
        if (ranktype_count.includes(2)) return 'Fullhouse'
        return 'Three of a kind';

    }
    else if (ranktype_count.includes(2)) { //TWO OR ONE PAIR
        let pair = ranktype_count.filter(x => x == 2).length
        if (pair == 2) return 'Two Pair';
        return 'One Pair';
    }
    else {
        if (isStraight(mappedRank)) return 'Straight';

    }

    return 'Highcard';

};






const RoyalFlush = ['h10', 'hJ', 'hQ', 'hK', 'hA'];
const StraightFlush = ['h8', 'h9', 'hQ', 'hJ', 'h10'];
const Flush = ['h2', 'h9', 'hQ', 'h5', 'h10'];

const ThreeOfaKind = ['d3', 'cK', 's7', 'd7', 'c7'];
const FourOfaKind = ['d3', 'h7', 's7', 'd7', 'c7'];

const Straight = ['s8', 'c9', 'cQ', 'dJ', 'h10'];

const OnePair = ['hA', 'dA', 'c8', 's4', 'h7'];
const TwoPair = ['s4', 'c4', 'c3', 'd3', 'cQ'];

const FullHouse = ['d3', 'c3', 's7', 'd7', 'c7'];
const HighCard = ['d3', 'cJ', 's8', 'h4', 's2'];


//console.log(determineRank({ hand: HighCard }));

module.exports = {
    determineRank: determineRank
};

