# 字符串解码/AES 解密

```shell
  null dec <string>
```

![enc](/null-cli/enc.gif)

![aes](/null-cli/aes.gif)

## 字符串解码 参数

| name |  alias   | 默认值 |   可选值   |
| :--: | :------: | :----: | :--------: |
|  -m  | --method | base64 | base64,hex |

```shell

  null dec bnVsbC1jbGk=   # null-cli

  null dec 6e756c6c2d636c69 -m hex    # null-cli

```

## AES 解密 参数

| name |  alias   |      默认值      |     可选值     |
| :--: | :------: | :--------------: | :------------: |
|  -m  | --method |      base64      |      aes       |
|  -k  |  --key   | 20201111nullbest | 任意 16 位字符 |
|  -i  |   --iv   | webbestlangworld | 任意 16 位字符 |

```shell
null dec b425ed8b1698de56aed3d1089ade239d -m aes  # null-cli
```
