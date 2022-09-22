<script>
    export default {
      methods: {
        invite() {
          window.open(
            'https://discord.com/api/oauth2/authorize?client_id=650691698409734151&permissions=1642787630327&scope=bot%20applications.commands',
            '_blank',
          );
        },
        support() {
          window.open(
            'https://discord.com/invite/euTdctganf',
            '_blank',
          );
        },
      },
    };
    </script>

    <template>
      <div class="NavBarBox">
        <div class="logoBox">
          <img alt="Ayako Logo" class="ayakoLogo"
               onclick="window.location='/'"
               src="https://cdn.ayakobot.com/website_assets/NavBarIcon.png"
          />
          <span class="ayako bold ">Ayako</span>
          <span class="discordBot bold ">Discord Bot</span>
        </div>

        <div class="buttonBox">
          <button
            @click="invite">
            Invite
          </button>
          <button @click="$router.push('commands')">Commands</button>
          <button @click="support">Support</button>
          <button class="premium" @click="$router.push('premium')">👑 Premium 👑</button>
          <button class="login" @click="$router.push('login')">Login
          </button>
        </div>
      </div>
    </template>

    <style scoped>
    .logoBox {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .premium {
      color: gold;
    }

    .login {
      color: #fe3521;
      margin-right: 1em;
    }

    button {
      background-color: transparent;
      border: none;
      color: white;
      font-weight: bold;
      margin-left: 2rem;
      transition: background-color 0.2s ease-out;
      border-radius: 1em;
    }

    button:hover {
      background-color: #50505b;
      transition: background-color 0.2s ease-out;
    }

    .ayako {
      font-size: 1.5em;
    }

    .bold {
      font-weight: bold;
    }

    .ayakoLogo {
      width: 3em;
      height: 3em;
    }

    .discordBot {
      margin-top: 0.3em;
      margin-left: 1em;
      color: #fe3521;
    }

    .NavBarBox {
      z-index: 10;
      overflow: hidden;
      background-color: #181818;
      position: fixed;
      top: 0;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 0 0.5em 0.5em #181818;
    }

    </style>
