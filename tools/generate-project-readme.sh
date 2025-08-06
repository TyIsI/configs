#!/bin/bash

# shellcheck disable=SC2094
node_modules/.bin/prettier -w . \
    && (
        echo "# $(jq -r .name package.json)"

        echo ""

        jq -r .description package.json

        echo ""

        find packages/*/ -maxdepth 1 -name package.json | while read -r PKGJSON_FILE; do
            echo "- $(jq -r .name "${PKGJSON_FILE}"): $(jq -r .description "${PKGJSON_FILE}")"
        done

        echo ""

        find docs/ -maxdepth 1 -name '*.md' | while read -r DF; do
            sed 's/^#/##/g' "${DF}"
        done

        echo ""
        echo "## Packages"
        echo ""

        # shellcheck disable=SC2094
        find packages/ -mindepth 2 -maxdepth 2 -name README.md | while read -r README_FILE; do
            sed 's/^#/##/g' "${README_FILE}"
        done

        echo ""
    ) > README.md && node_modules/.bin/prettier -w README.md
