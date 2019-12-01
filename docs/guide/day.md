# 日期格式转换

> 日期格式转换,时间戳和字符串互相转换

```shell
$ null day <params>
```

![day](/null-cli/day.gif)

## 参数

| name | alias | 默认值 | 可选值 |
| :-: | :-: | :-: | :-: |
| -f | --format | YYYY-MM-DD HH:mm:ss | 同 moment.js |
| -t | --type | string | string(13 位时间戳->字符串),unix(字符串->13 位时间戳) |

```shell
null day 1574765068684    # 2019-11-26 18:44:28

null day "2020-01-01 18:18:18" -t unix  # 1577873898000
```
