import { opine } from "https://deno.land/x/opine@2.1.1/mod.ts";
import { opineCors } from "https://deno.land/x/cors/mod.ts";
export const emotions = new Map<string, string[]>();


emotions.set("stress", 
["relax, take it easy",
"take a break, eat a KitKat",
"go on holiday",
"Exercise regularly",
"Turn off your phone sometimes"])

emotions.set("trauer",
["don't worry be happy",
"go to your happy place",
"try weed",
"Seek help if you think you may be dealing with depression"])

emotions.set("sport",
["Mach mehr Sport",
"Krafttraining hilf deinem Body-Image",
"Auch kleine Fortschritte sind Fortschritte"])

emotions.set("lernen",
["Setze dir deine Ziele vor Augen",
"Früh aufstehen hilft",
"Nicht alles auf den letzten Drücker lernen"])

emotions.set("familie",
["Ruf deine Eltern an",
"Familie sind die wahren OGs",
"Versuche zu verstehen", "warum die Karen in deiner Familie so eine Karen ist"])

emotions.set("freunde",
["call your friends to ckeck up on them",
"Nur weil man noch snapt, heißt das nicht, dass man noch in Kontakt ist",
"love your friends"])

emotions.set("other",
["write a journal to keep track of your emotions",
"try out our JOY app for help and guidance through your mental health journey. Available for download on the App Store",
"seek out professional help from a therapist",
"talk to close friends or relatives about your problems"])


export function generateQuote(emotion: string, emotionMap = emotions){
    const emotionList = emotionMap.get(emotion)!
    const index = Math.floor(Math.random() * emotionList.length)
    return emotionList[index]
}

const app = opine();
app.use(opineCors())

app.get("/problems/:typeofproblem", function (req, res) {
    res.send({ answer: generateQuote(req.params.typeofproblem) })
});

app.listen(
    3004,
    () => console.log("server has started on http://localhost:3004 🚀"),
);