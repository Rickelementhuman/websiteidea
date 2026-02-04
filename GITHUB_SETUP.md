# GitHub setup for this repo only

This repo is set up to use a **different GitHub account** than your other projects. Everything below is scoped to this repository only.

---

## 1. Set your Git identity for this repo (required once)

So commits from this folder use the right name and email:

```bash
cd /Users/rickvandenkommer/Documents/NewEHWebsite

git config --local user.name "Rick EH"
git config --local user.email "rick@elementhuman.com"
```

Use the name and email of the GitHub account you want for **this** repo. Other repos keep using your global Git config.

---

## 2. Create the repository on GitHub

1. Log in to GitHub with the account you want for this project.
2. Create a **new repository** (e.g. `NewEHWebsite`).
3. Do **not** add a README, .gitignore, or license (this folder already has content).

---

## 3. Connect this repo to GitHub

### Option A: SSH (recommended for “different account for this repo”)

Use a dedicated SSH key so only this repo uses this GitHub account.

**3a. Create an SSH key for this account** (if you don’t have one yet):

```bash
ssh-keygen -t ed25519 -C "your-email@example.com" -f ~/.ssh/id_ed25519_ehwebsite
```

**3b. Add the key to GitHub**

- Copy the public key: `cat ~/.ssh/id_ed25519_ehwebsite.pub`
- GitHub → Settings → SSH and GPG keys → New SSH key → paste and save.

**3c. Tell SSH to use this key only for a special host**

Edit `~/.ssh/config` (create it if needed) and add:

```
Host github.com-ehwebsite
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_ehwebsite
```

**3d. Add the remote using that host**

Replace `YOUR_USERNAME` and `YOUR_REPO` with your GitHub username and repo name:

```bash
git remote add origin git@github.com-ehwebsite:YOUR_USERNAME/YOUR_REPO.git
```

Example: `git remote add origin git@github.com-ehwebsite:acme/NewEHWebsite.git`

Pushes and pulls will use the `ehwebsite` key and thus this GitHub account only.

---

### Option B: HTTPS

If you prefer HTTPS:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
```

When Git asks for credentials, use the username and **Personal Access Token** of the GitHub account you want for this repo. To avoid mixing accounts, use a token only for this account and, if prompted, choose “Never” or “This repository only” for saving so it doesn’t overwrite your other account’s credentials.

---

## 4. Push and keep it updated

First push (with main as default branch):

```bash
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main
```

To keep the repo continuously updated:

```bash
git add .
git commit -m "Your message"
git push
```

Only this folder uses the identity and (with Option A) the GitHub account you configured above; your other repos are unchanged.
