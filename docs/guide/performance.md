# 性能分析

> 通过 PerformanceTiming API 获取与浏览器性能有关的时间数据,分析 web 前端性能

```shell
$ null perf <url>
```

## 性能指标

|      name      |                   value                    |
| :------------: | :----------------------------------------: |
|  DNS 查询耗时  |    domainLookupEnd - domainLookupStart     |
|  TCP 连接耗时  |         connectEnd - connectStart          |
|  页面请求耗时  |        responseEnd - responseStart         |
|    白屏耗时    |      responseStart - navigationStart       |
|  DOM 解析耗时  |        domComplete - domInteractive        |
| DOM Ready 耗时 | domContentLoadedEventEnd - navigationStart |
| 页面加载总耗时 |       loadEventEnd - navigationStart       |

![performance](/null-cli/performance.gif)
