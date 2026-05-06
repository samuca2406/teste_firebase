import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyC6naHAFLKV8OBqsx3IQsdXNK661XuJklg",
  authDomain: "aula01-45478.firebaseapp.com",
  projectId: "aula01-45478",
  storageBucket: "aula01-45478.firebasestorage.app",
  messagingSenderId: "350712180495",
  appId: "1:350712180495:web:6e5585e2b64af12cc0187a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
document.addEventListener("DOMContentLoaded", () => {
const btn = document.getElementById("btnCadastrar");
btn.addEventListener("click", async () => {
const email = document.getElementById('email').value.trim();
const password = document.getElementById('password').value.trim();
if (!email || !password) {
            alert("Preencha todos os campos!");
            return;
        }

        if (password.length < 6) {
            alert("A senha precisa ter no mínimo 6 caracteres!");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            alert("✅ Sucesso! Usuário: " + userCredential.user.email);

        } catch (error) {
            console.log("🔥 ERRO COMPLETO:", error);
            switch (error.code) {
                case "auth/email-already-in-use":
                    alert("Esse e-mail já está em uso.");
                    break;
                case "auth/invalid-email":
                    alert("E-mail inválido.");
                    break;
                case "auth/weak-password":
                    alert("Senha fraca. Use pelo menos 6 caracteres.");
                    break;
                case "auth/operation-not-allowed":
                    alert("Ative Email/Senha no Firebase Authentication.");
                    break;
                default:
                    alert("Erro: " + error.message);
            }
        }

    });

});
