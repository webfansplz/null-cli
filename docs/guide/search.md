# 快捷搜索

> 通过默认浏览器快捷搜索, 默认使用Google, 支持多网址同时打开

```shell
$ null search <keyword> // search by google
$ null search <keyword> -g -n // search by github & npm
$ null search <keyword> -a // search by all sites(npm, google, stackoverflow, wiki, baidu, github)
```

## 参数

| name |       alias     |          describe       |
| :--: | :-------------: | :---------------------: |
|  -d  |    --default    |      search by google   |
|  -n  |      --npm      |      search by npm      |
|  -s  | --stackoverflow | search by stackoverflow |
|  -w  |      --wiki     |      search by wiki     |
|  -b  |      --baidu    |      search by baidu    |
|  -g  |     --github    |      search by github   |
|  -a  |      --all      |    search by all site   |


