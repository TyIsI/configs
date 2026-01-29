#!/bin/bash

cd "$(dirname "$(realpath "$0")")/../" || exit 255

# find ./dist/ -type f -name '*.mjs' -print0 | xargs -0 -r grep -l '\.js"' | xargs -r perl -i -pe 's/\.js"/.mjs"/g'
find ./dist/ -type f -name '*.d.ts' | while read -r DTSF; do
    DTSMF=${DTSF/.d.ts/.d.mts}

    mv "${DTSF}" "${DTSMF}" && sed -i 's/\.js/\.mjs/g' "${DTSMF}"
done
