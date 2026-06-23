import aeFlag from "@/assets/images/flags/ae.webp"
import arFlag from "@/assets/images/flags/ar.webp"
import auFlag from "@/assets/images/flags/au.webp"
import bdFlag from "@/assets/images/flags/bd.webp"
import bgFlag from "@/assets/images/flags/bg.webp"
import bhFlag from "@/assets/images/flags/bh.webp"
import brFlag from "@/assets/images/flags/br.webp"
import caFlag from "@/assets/images/flags/ca.webp"
import chFlag from "@/assets/images/flags/ch.webp"
import clFlag from "@/assets/images/flags/cl.webp"
import cnFlag from "@/assets/images/flags/cn.webp"
import coFlag from "@/assets/images/flags/co.webp"
import cyFlag from "@/assets/images/flags/cy.webp"
import czFlag from "@/assets/images/flags/cz.webp"
import dkFlag from "@/assets/images/flags/dk.webp"
import egFlag from "@/assets/images/flags/eg.webp"
import euFlag from "@/assets/images/flags/eu.webp"
import gbFlag from "@/assets/images/flags/gb.webp"
import hkFlag from "@/assets/images/flags/hk.webp"
import hmFlag from "@/assets/images/flags/hm.webp"
import hnFlag from "@/assets/images/flags/hn.webp"
import hrFlag from "@/assets/images/flags/hr.webp"
import htFlag from "@/assets/images/flags/ht.webp"
import huFlag from "@/assets/images/flags/hu.webp"
import idFlag from "@/assets/images/flags/id.webp"
import inFlag from "@/assets/images/flags/in.webp"
import isFlag from "@/assets/images/flags/is.webp"
import joFlag from "@/assets/images/flags/jo.webp"
import jpFlag from "@/assets/images/flags/jp.webp"
import keFlag from "@/assets/images/flags/ke.webp"
import krFlag from "@/assets/images/flags/kr.webp"
import kwFlag from "@/assets/images/flags/kw.webp"
import lbFlag from "@/assets/images/flags/lb.webp"
import lcFlag from "@/assets/images/flags/lc.webp"
import lkFlag from "@/assets/images/flags/lk.webp"
import maFlag from "@/assets/images/flags/ma.webp"
import mxFlag from "@/assets/images/flags/mx.webp"
import myFlag from "@/assets/images/flags/my.webp"
import ngFlag from "@/assets/images/flags/ng.webp"
import noFlag from "@/assets/images/flags/no.webp"
import npFlag from "@/assets/images/flags/np.webp"
import nzFlag from "@/assets/images/flags/nz.webp"
import omFlag from "@/assets/images/flags/om.webp"
import peFlag from "@/assets/images/flags/pe.webp"
import phFlag from "@/assets/images/flags/ph.webp"
import pkFlag from "@/assets/images/flags/pk.webp"
import plFlag from "@/assets/images/flags/pl.webp"
import qaFlag from "@/assets/images/flags/qa.webp"
import roFlag from "@/assets/images/flags/ro.webp"
import ruFlag from "@/assets/images/flags/ru.webp"
import saFlag from "@/assets/images/flags/sa.webp"
import seFlag from "@/assets/images/flags/se.webp"
import sgFlag from "@/assets/images/flags/sg.webp"
import thFlag from "@/assets/images/flags/th.webp"
import trFlag from "@/assets/images/flags/tr.webp"
import twFlag from "@/assets/images/flags/tw.webp"
import uaFlag from "@/assets/images/flags/ua.webp"
import usFlag from "@/assets/images/flags/us.webp"
import vnFlag from "@/assets/images/flags/vn.webp"
import zaFlag from "@/assets/images/flags/za.webp"

export type SupportedCurrency = {
  currencyCode: string
  displayName: string
  flagCode: string
  flag: string
  popular: boolean
}

export const supportedCurrencies = [
  {
    currencyCode: "AED",
    displayName: "United Arab Emirates Dirham",
    flagCode: "ae",
    flag: aeFlag,
    popular: false,
  },
  {
    currencyCode: "ARS",
    displayName: "Argentine Peso",
    flagCode: "ar",
    flag: arFlag,
    popular: false,
  },
  {
    currencyCode: "AUD",
    displayName: "Australian Dollar",
    flagCode: "au",
    flag: auFlag,
    popular: false,
  },
  {
    currencyCode: "BDT",
    displayName: "Bangladeshi Taka",
    flagCode: "bd",
    flag: bdFlag,
    popular: false,
  },
  {
    currencyCode: "BGN",
    displayName: "Bulgarian Lev",
    flagCode: "bg",
    flag: bgFlag,
    popular: false,
  },
  {
    currencyCode: "BHD",
    displayName: "Bahraini Dinar",
    flagCode: "bh",
    flag: bhFlag,
    popular: false,
  },
  {
    currencyCode: "BRL",
    displayName: "Brazilian Real",
    flagCode: "br",
    flag: brFlag,
    popular: false,
  },
  {
    currencyCode: "CAD",
    displayName: "Canadian Dollar",
    flagCode: "ca",
    flag: caFlag,
    popular: false,
  },
  {
    currencyCode: "CHF",
    displayName: "Swiss Franc",
    flagCode: "ch",
    flag: chFlag,
    popular: false,
  },
  {
    currencyCode: "CLP",
    displayName: "Chilean Peso",
    flagCode: "cl",
    flag: clFlag,
    popular: false,
  },
  {
    currencyCode: "CNY",
    displayName: "Chinese Renminbi Yuan",
    flagCode: "cn",
    flag: cnFlag,
    popular: false,
  },
  {
    currencyCode: "COP",
    displayName: "Colombian Peso",
    flagCode: "co",
    flag: coFlag,
    popular: false,
  },
  {
    currencyCode: "CYP",
    displayName: "Cyprus Pound",
    flagCode: "cy",
    flag: cyFlag,
    popular: false,
  },
  {
    currencyCode: "CZK",
    displayName: "Czech Koruna",
    flagCode: "cz",
    flag: czFlag,
    popular: false,
  },
  {
    currencyCode: "DKK",
    displayName: "Danish Krone",
    flagCode: "dk",
    flag: dkFlag,
    popular: false,
  },
  {
    currencyCode: "EGP",
    displayName: "Egyptian Pound",
    flagCode: "eg",
    flag: egFlag,
    popular: false,
  },
  {
    currencyCode: "EUR",
    displayName: "Euro",
    flagCode: "eu",
    flag: euFlag,
    popular: true,
  },
  {
    currencyCode: "GBP",
    displayName: "British Pound",
    flagCode: "gb",
    flag: gbFlag,
    popular: true,
  },
  {
    currencyCode: "HKD",
    displayName: "Hong Kong Dollar",
    flagCode: "hk",
    flag: hkFlag,
    popular: false,
  },
  {
    currencyCode: "HNL",
    displayName: "Honduran Lempira",
    flagCode: "hn",
    flag: hnFlag,
    popular: false,
  },
  {
    currencyCode: "HRK",
    displayName: "Croatian Kuna",
    flagCode: "hr",
    flag: hrFlag,
    popular: false,
  },
  {
    currencyCode: "HTG",
    displayName: "Haitian Gourde",
    flagCode: "ht",
    flag: htFlag,
    popular: false,
  },
  {
    currencyCode: "HUF",
    displayName: "Hungarian Forint",
    flagCode: "hu",
    flag: huFlag,
    popular: false,
  },
  {
    currencyCode: "IDR",
    displayName: "Indonesian Rupiah",
    flagCode: "id",
    flag: idFlag,
    popular: false,
  },
  {
    currencyCode: "INR",
    displayName: "Indian Rupee",
    flagCode: "in",
    flag: inFlag,
    popular: false,
  },
  {
    currencyCode: "ISK",
    displayName: "Icelandic Krona",
    flagCode: "is",
    flag: isFlag,
    popular: false,
  },
  {
    currencyCode: "JOD",
    displayName: "Jordanian Dinar",
    flagCode: "jo",
    flag: joFlag,
    popular: false,
  },
  {
    currencyCode: "JPY",
    displayName: "Japanese Yen",
    flagCode: "jp",
    flag: jpFlag,
    popular: false,
  },
  {
    currencyCode: "KES",
    displayName: "Kenyan Shilling",
    flagCode: "ke",
    flag: keFlag,
    popular: false,
  },
  {
    currencyCode: "KRW",
    displayName: "South Korean Won",
    flagCode: "kr",
    flag: krFlag,
    popular: false,
  },
  {
    currencyCode: "KWD",
    displayName: "Kuwaiti Dinar",
    flagCode: "kw",
    flag: kwFlag,
    popular: false,
  },
  {
    currencyCode: "LBP",
    displayName: "Lebanese Pound",
    flagCode: "lb",
    flag: lbFlag,
    popular: false,
  },
  {
    currencyCode: "XCD",
    displayName: "East Caribbean Dollar",
    flagCode: "lc",
    flag: lcFlag,
    popular: false,
  },
  {
    currencyCode: "LKR",
    displayName: "Sri Lankan Rupee",
    flagCode: "lk",
    flag: lkFlag,
    popular: false,
  },
  {
    currencyCode: "MAD",
    displayName: "Moroccan Dirham",
    flagCode: "ma",
    flag: maFlag,
    popular: false,
  },
  {
    currencyCode: "MXN",
    displayName: "Mexican Peso",
    flagCode: "mx",
    flag: mxFlag,
    popular: false,
  },
  {
    currencyCode: "MYR",
    displayName: "Malaysian Ringgit",
    flagCode: "my",
    flag: myFlag,
    popular: false,
  },
  {
    currencyCode: "NGN",
    displayName: "Nigerian Naira",
    flagCode: "ng",
    flag: ngFlag,
    popular: false,
  },
  {
    currencyCode: "NOK",
    displayName: "Norwegian Krone",
    flagCode: "no",
    flag: noFlag,
    popular: false,
  },
  {
    currencyCode: "NPR",
    displayName: "Nepalese Rupee",
    flagCode: "np",
    flag: npFlag,
    popular: false,
  },
  {
    currencyCode: "NZD",
    displayName: "New Zealand Dollar",
    flagCode: "nz",
    flag: nzFlag,
    popular: false,
  },
  {
    currencyCode: "OMR",
    displayName: "Omani Rial",
    flagCode: "om",
    flag: omFlag,
    popular: false,
  },
  {
    currencyCode: "PEN",
    displayName: "Peruvian Sol",
    flagCode: "pe",
    flag: peFlag,
    popular: false,
  },
  {
    currencyCode: "PHP",
    displayName: "Philippine Peso",
    flagCode: "ph",
    flag: phFlag,
    popular: false,
  },
  {
    currencyCode: "PKR",
    displayName: "Pakistani Rupee",
    flagCode: "pk",
    flag: pkFlag,
    popular: false,
  },
  {
    currencyCode: "PLN",
    displayName: "Polish Zloty",
    flagCode: "pl",
    flag: plFlag,
    popular: false,
  },
  {
    currencyCode: "QAR",
    displayName: "Qatari Riyal",
    flagCode: "qa",
    flag: qaFlag,
    popular: false,
  },
  {
    currencyCode: "RON",
    displayName: "Romanian Leu",
    flagCode: "ro",
    flag: roFlag,
    popular: false,
  },
  {
    currencyCode: "RUB",
    displayName: "Russian Ruble",
    flagCode: "ru",
    flag: ruFlag,
    popular: false,
  },
  {
    currencyCode: "SAR",
    displayName: "Saudi Riyal",
    flagCode: "sa",
    flag: saFlag,
    popular: false,
  },
  {
    currencyCode: "SEK",
    displayName: "Swedish Krona",
    flagCode: "se",
    flag: seFlag,
    popular: false,
  },
  {
    currencyCode: "SGD",
    displayName: "Singapore Dollar",
    flagCode: "sg",
    flag: sgFlag,
    popular: false,
  },
  {
    currencyCode: "THB",
    displayName: "Thai Baht",
    flagCode: "th",
    flag: thFlag,
    popular: false,
  },
  {
    currencyCode: "TRY",
    displayName: "Turkish Lira",
    flagCode: "tr",
    flag: trFlag,
    popular: false,
  },
  {
    currencyCode: "TWD",
    displayName: "New Taiwan Dollar",
    flagCode: "tw",
    flag: twFlag,
    popular: false,
  },
  {
    currencyCode: "UAH",
    displayName: "Ukrainian Hryvnia",
    flagCode: "ua",
    flag: uaFlag,
    popular: false,
  },
  {
    currencyCode: "USD",
    displayName: "United States Dollar",
    flagCode: "us",
    flag: usFlag,
    popular: true,
  },
  {
    currencyCode: "VND",
    displayName: "Vietnamese Dong",
    flagCode: "vn",
    flag: vnFlag,
    popular: false,
  },
  {
    currencyCode: "ZAR",
    displayName: "South African Rand",
    flagCode: "za",
    flag: zaFlag,
    popular: false,
  },
] as const satisfies readonly SupportedCurrency[]

export type SupportedCurrencyCode =
  (typeof supportedCurrencies)[number]["currencyCode"]

export const supportedCurrencyCodes = Array.from(
  new Set(supportedCurrencies.map((currency) => currency.currencyCode))
)

export const popularCurrencies = supportedCurrencies.filter(
  (currency) => currency.popular
)

export const otherCurrencies = supportedCurrencies.filter(
  (currency) => !currency.popular
)
