determineRank = (x) => {

    /* 1	Hand-ranking categories https://www.cardplayer.com/rules-of-poker/hand-rankings
    1.1	Five of a kind // Royal -- A, K, Q, J, 10, all the same suit
    1.2	Straight flush -- Five cards in a sequence, all in the same suit.
    1.3	Four of a kind -- All four cards of the same rank.
    1.4	Full house --Three of a kind with a pair.
    1.5	Flush --Any five cards of the same suit, but not in a sequence.
    1.6	Straight -- Five cards in a sequence, but not of the same suit.
    1.7	Three of a kind --Three cards of the same rank.
    1.8	Two pair --Two different pairs.
    1.9	One pair --Two cards of the same rank.
    1.10	High card */

    console.log(x.hand);

    const suits = x.hand.map((v) => v[0]);
    const rank = x.hand.map((v) => v[1] + (v[2] != undefined ? v[2] : ''));
    suits;
    rank;

    const allRank = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

    const allRankI = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    const royal = [1, 10, 11, 12, 13];
    const mappedRank = x.hand.map((v, i) => {
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


    mappedRank;

    let suit_type = suits.filter((x, i, a) => a.indexOf(x) == i);
    let suit_count = suit_type.length;
    suit_count;


    //FLUSH
    if (suit_count == 1) {
        var isRoyal = false;
        var isStraight = false;
        mappedRank.sort((a, b) => a - b);

        //ROYAL
        if (mappedRank.includes(13)) {
            isRoyal = mappedRank.every((r, i) => r == royal[i]);
            if (isRoyal) return 'Royal Flush';
        }

        //STRAIGHT
        let start = allRankI.indexOf(mappedRank[0]);
        isStraight = mappedRank.every((r, i) => r == allRankI[start + i]);
        if (isStraight) return 'Straight Flush';


        return 'Flush';
    }
    else if (suit_count == 4) { //Four of a kind or Three of a kind
        let ranks = rank.filter((x, i, a) => a.indexOf(x) == i);
        if (ranks.length == 2) {
            return 'Four of a kind';
        }
        if (ranks.length == 3) {
            return 'Three of a kind';
        }

    }
    else if (suit_count == 3) { //Three of a kind

    }


    return;

}


console.log(determineRank({ hand: ['h8', 'c8', 's8', 'd7', 'h7'] }));

module.exports = {
    determineRank: determineRank
};