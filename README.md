# actions-get-secret-sops
GitHub Action get secret with specific key from encrypted SOPS yaml file

## Features
- Only support Azure Key Vault

## Usage

Azure Key Vault

```yaml
steps:
  - uses: mildronize/actions-get-secret-sops/azure@main
    id: sops
    with:
      path: "azure.enc.yaml"                    # Encrypted SOPS yaml path
      property-path: ".property"                # jq/yq expression syntax for getting a particular value
      decrypting-key: ${{ secrets.credential }} # A credential using to decrypt a Encrypted SOPS yaml file
      sops-version: '3.7.2'

  - run: echo "${{ steps.sops.outputs.secret }}"
```