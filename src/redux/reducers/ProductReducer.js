import bracelete1 from "../../jewerly pictures/bracelete1.png"
import bracelete2 from "../../jewerly pictures/bracelete2.png";
import bracelete3 from "../../jewerly pictures/brecelete3.png";
import bracelete4 from "../../jewerly pictures/bracelete4.png";
import bracelete5 from "../../jewerly pictures/bracelete5.png";
import nacklace1 from "../../jewerly pictures/nacklace1.png";
import nacklace2 from "../../jewerly pictures/nacklace2.png";
import nacklace3 from "../../jewerly pictures/nacklace3.png";
import nacklace4 from "../../jewerly pictures/nacklace4.png";
import nacklace5 from "../../jewerly pictures/nacklace5.png";
import nacklace6 from "../../jewerly pictures/nacklace6.png";
import ring1 from "../../jewerly pictures/ring1.png";
import ring2 from "../../jewerly pictures/ring2.png";
import ring3 from "../../jewerly pictures/ring3.png";
import ring4 from "../../jewerly pictures/ring4.png";
import ring5 from "../../jewerly pictures/ring5.png";
import ring6 from "../../jewerly pictures/ring6.png";
import ring7 from "../../jewerly pictures/ring7.png";
import ring8 from "../../jewerly pictures/ring8.png";
import ring9 from "../../jewerly pictures/ring9.png";

const initialState = [
    { id: 0, name: "bracelete1", qty: 10, cart: 0, image: bracelete1, price: 295, description: "צמיד כסף סטרלינג בנגל" },
    { id: 1, name: "bracelete2", qty: 10, cart: 0, image: bracelete2, price: 520, description: "צמיד קונספט כסף עם סוגר לב" },
    { id: 2, name: "bracelete3", qty: 10, cart: 0, image: bracelete3, price: 555, description: "צמיד כסף מומנטס סוגר לב זהב k14" },
    { id: 3, name: "bracelete4", qty: 10, cart: 0, image: bracelete4, price: 379, description: "צמיד כסף מומנטס כתר Pandora נוצץ" },
    { id: 4, name: "bracelete5", qty: 10, cart: 0, image: bracelete5, price: 1749, description: "צמיד כסף בנגל סוגר זהב 14"},
    { id: 5, name: "nacklace1", qty: 20, cart: 0, image: nacklace1, price: 599, description: "שרשרת ציפוי זהב אינפיניטי" },
    { id: 6, name: "nacklace2", qty: 20, cart: 0, image: nacklace2, price: 425, description: "שרשרת כסף בלו פלאוור" },
    { id: 7, name: "nacklace3", qty: 20, cart: 0, image: nacklace3, price: 600, description: "שרשרת כסף מעגלים משלימים" },
    { id: 8, name: "nacklace4", qty: 20, cart: 0, image: nacklace4, price: 380, description: "שרשרת כסף תליון עיגול ומרובע נוצצים" },
    { id: 9, name: "nacklace5", qty: 20, cart: 0, image: nacklace5, price: 380, description: "שרשרת כסף פתית שלג עגול" },
    { id: 10, name: "nacklace6", qty: 20, cart: 0, image: nacklace6, price: 600, description: "שרשרת כסף טרו לאב" },
    { id: 11, name: "ring1", qty: 15, cart: 0, image: ring1, price: 240, description: "טבעת ציפוי זהב קשר אינפיניטי" },
    { id: 12, name: "ring2", qty: 15, cart: 0, image: ring2, price: 290, description: "טבעת כסף פלאוור קראון" },
    { id: 13, name: "ring3", qty: 15, cart: 0, image: ring3, price: 310, description: "טבעת כסף לבבות PANDORA" },
    { id: 14, name: "ring4", qty: 15, cart: 0, image: ring4, price: 550, description: "טבעת ציפוי זהב מעטפת פאווה" },
    { id: 15, name: "ring5", qty: 15, cart: 0, image: ring5, price: 290, description: "טבעת ציפוי זהב גל זרקונים" },
    { id: 16, name: "ring6", qty: 15, cart: 0, image: ring6, price: 260, description: "טבעת כסף זוהר אלגנטי" },
    { id: 17, name: "ring7", qty: 15, cart: 0, image: ring7, price: 239, description: "טבעת רוז לאב איט"},
    { id: 18, name: "ring8", qty: 15, cart: 0, image: ring8, price: 190, description: "טבעת זיגזג כסף"},
    { id: 19, name: "ring9", qty: 15, cart: 0, image: ring9, price: 190, description: "טבעת כסף לבבות דובדבן"}
]

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ("DECREASEQTY"):
            if (state[action.id].qty == 0)
                return state;
            const new_state = [...state]
            new_state[action.id].qty--;
            return new_state
        case ("ADDQTY"):           
            const new_state1 = [...state]
            new_state1[action.id].qty++;
            return new_state1
    }
    return state
}