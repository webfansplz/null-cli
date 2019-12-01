# 字符串编码/AES 加密

```shell
  null enc <string>
```

![enc](/null-cli/enc.gif)

![aes](/null-cli/aes.gif)

## 字符串编码 参数

| name |  alias   | 默认值 |                     可选值                      |
| :--: | :------: | :----: | :---------------------------------------------: |
|  -m  | --method | base64 | sha1,sha224,sha256,sha384,sha512,md5,base64,hex |

```shell
  null enc null-cli   # bnVsbC1jbGk=

  null enc null-cli -m sha1   # a0071acf7a33712783545db8b4a7a89f0a35013d

  null enc null-cli -m sha256 # fe8f4fa399ff4888b4d393c8dd09ba35385db71e12d627d83cc65d89ba83fc9b

  null enc null-cli -m md5    # 91732209f7c84dd6119c81fd8b1a9669
```

## AES 加密 参数

| name |  alias   |      默认值      |     可选值     |
| :--: | :------: | :--------------: | :------------: |
|  -m  | --method |      base64      |      aes       |
|  -k  |  --key   | 20201111nullbest | 任意 16 位字符 |
|  -i  |   --iv   | webbestlangworld | 任意 16 位字符 |

```shell
null enc null-cli -m aes  # b425ed8b1698de56aed3d1089ade239d
```
