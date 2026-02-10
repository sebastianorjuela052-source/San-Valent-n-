import { useState } from "react"; import { motion } from "framer-motion"; import { Card, CardContent } from "@/components/ui/card"; import { Button } from "@/components/ui/button";

export default function ValentineApp() { const [accepted, setAccepted] = useState(false); const [yesSize, setYesSize] = useState(1);

const handleNo = () => { setYesSize((prev) => prev + 0.2); };

if (accepted) { return ( <div className="min-h-screen flex items-center justify-center bg-pink-100 p-4"> <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} > <Card className="rounded-2xl shadow-xl p-6 text-center"> <CardContent> <h1 className="text-3xl font-bold mb-4">💖 Felicidades 💖</h1> <p className="text-lg"> Nos vemos en <br /> <strong>Lugar:</strong> (Pon aquí el lugar) <br /> <strong>Fecha:</strong> (Pon aquí la fecha) <br /> <strong>Hora:</strong> (Pon aquí la hora) </p> <p className="mt-4 text-xl font-semibold">Te amo ❤️</p> </CardContent> </Card> </motion.div> </div> ); }

return ( <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-200 to-red-200 p-4"> <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} > <Card className="rounded-2xl shadow-xl p-8 text-center"> <CardContent> <h1 className="text-3xl font-bold mb-6"> ❤️ ¿Quieres ser mi San Valentín? ❤️ </h1>

<div className="flex gap-4 justify-center">
          <motion.div
            animate={{ scale: yesSize }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Button
              className="text-lg px-6 py-4"
              onClick={() => setAccepted(true)}
            >
              Sí 💘
            </Button>
          </motion.div>

          <Button
            variant="destructive"
            className="text-lg px-6 py-4"
            onClick={handleNo}
          >
            No 😢
          </Button>
        </div>
      </CardContent>
    </Card>
  </motion.div>
</div>

); }
