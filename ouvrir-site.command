#!/bin/bash
cd "$(dirname "$0")"
# Ouvrir le site dans le navigateur après 2 secondes
( sleep 2 && open "http://localhost:8001" ) &
echo "=========================================="
echo "  IAassiste – Serveur local"
echo "  http://localhost:8001"
echo "=========================================="
echo ""
echo "Fermez cette fenêtre pour arrêter le serveur."
echo ""
python3 -m http.server 8001
